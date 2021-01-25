CKEDITOR.dialog.add( 'audio', function ( editor )
{
	var lang = editor.lang.audio;

	function commitValue( audioNode, extraStyles )
	{
		var value=this.getValue();

		if ( !value && this.id=='id' )
			value = generateId();
		
		audioNode.setAttribute( this.id, value);
		
		if(this.id=='autoplay')
		{
			if(!value)
			{
				audioNode.removeAttribute(this.id);
			}
		}
		if ( !value )
			return;
		switch( this.id )
		{
			case 'width':
				extraStyles.width = value + 'px';
				break;
			case 'height':
				extraStyles.height = value + 'px';
				break;
		}
	}

	function commitSrc( audioNode, extraStyles, audios )
	{
		var match = this.id.match(/(\w+)(\d)/),
			id = match[1],
			number = parseInt(match[2], 10);

		var audio = audios[number] || (audios[number]={});
		audio[id] = this.getValue();
	}

	function loadValue( audioNode )
	{
		if ( audioNode )
			this.setValue( audioNode.getAttribute( this.id ) );
		else
		{
			if ( this.id == 'id')
				this.setValue( generateId() );
		}
	}

	function loadSrc( audioNode, audios )
	{
		var match = this.id.match(/(\w+)(\d)/),
			id = match[1],
			number = parseInt(match[2], 10);

		var audio = audios[number];
		if (!audio)
			return;
		this.setValue( audio[ id ] );
	}

	function generateId()
	{
		var now = new Date();
		return 'audio' + now.getFullYear() + now.getMonth() + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds();
	}

	return {
		title : lang.dialogTitle,
		minWidth : 400,
		minHeight : 200,
		onShow : function()
		{
			// Clear previously saved elements.
			this.fakeImage = this.audioNode = null;

			var fakeImage = this.getSelectedElement();
			if ( fakeImage && fakeImage.data( 'cke-real-element-type' ) && fakeImage.data( 'cke-real-element-type' ) == 'audio' )
			{
				this.fakeImage = fakeImage;

				var audioNode = editor.restoreRealElement( fakeImage ),
					audios = [],
					sourceList = audioNode.getElementsByTag( 'source', '' );
				if (sourceList.count()==0)
					sourceList = audioNode.getElementsByTag( 'source', 'cke' );

				for ( var i = 0, length = sourceList.count() ; i < length ; i++ )
				{
					var item = sourceList.getItem( i );
					audios.push( {src : item.getAttribute( 'src' ), type: item.getAttribute( 'type' )} );
				}

				this.audioNode = audioNode;

				this.setupContent( audioNode, audios );
			}
			else
				this.setupContent( null, [] );
		},
		onOk : function()
		{
			var websource = this.getValueOf( 'info', 'src1' );
			if ( websource != '' )
			{
				editor.insertHtml(websource);
				return;
			}
			var audioNode = null;
			var fakeImage = null;
			if ( !this.fakeImage )
			{
				audioNode = CKEDITOR.dom.element.createFromHtml( '<video></video>', editor.document );
				audioNode.setAttributes(
					{
						controls : 'controls'
					}
				);
			}
			else
			{
				audioNode = this.audioNode;
			}

			var extraStyles = {}, audios = [];
			this.commitContent( audioNode, extraStyles, audios );

			var innerHtml = '', links = '', auto = '',
				link = lang.linkTemplate || '',
				fallbackTemplate = lang.fallbackTemplate || '';
			for(var i=0; i<audios.length; i++)
			{
				var audio = audios[i];
				if ( !audio || !audio.src )
					continue;
				innerHtml += '<source src="' + audio.src + '" type="' + audio.type + '" />';
				links += link.replace('%src%', audio.src).replace('%type%', audio.type);
			}
			audioNode.setHtml( innerHtml + fallbackTemplate.replace( '%links%', links ) );
			editor.insertElement( audioNode );
		},

		contents :
		[
			{
				id : 'info',
				elements :
				[
					{
						type : 'hbox',
						widths: [ '33%', '33%', '33%'],
						children : [
							{
								type : 'text',
								id : 'width',
								label : editor.lang.common.width,
								'default' : 400,
								validate : CKEDITOR.dialog.validate.notEmpty( lang.widthRequired ),
								commit : commitValue,
								setup : loadValue
							},
							{
								type : 'text',
								id : 'height',
								label : editor.lang.common.height,
								'default' : 300,
								validate : CKEDITOR.dialog.validate.notEmpty(lang.heightRequired ),
								commit : commitValue,
								setup : loadValue
							},
							{
								type : 'text',
								id : 'id',
								label : 'Id',
								commit : commitValue,
								setup : loadValue
							}
								]
					},
					{
						type : 'hbox',
						widths: [ '100%'],
						children : [
							{
								type : 'text',
								id : 'src0',
								label : lang.sourceAudio,
								style : 'width: 100%',
								commit : commitSrc,
								setup : loadSrc
							},
							{
								type : 'button',
								id : 'browse',
								hidden : 'true',
								style : 'display:inline-block;margin-top:10px;',
								filebrowser :
								{
									action : 'Browse',
									target: 'info:src0',
									url: editor.config.filebrowserFlashBrowseUrl || editor.config.filebrowserBrowseUrl
								},
								label : editor.lang.common.browseServer
							},
							{
								id : 'type0',
								label : lang.sourceType,
								type : 'select',
								'default' : 'video/mp4',
								items :
								[
									[ 'mp4', 'video/mp4' ],
									[ 'mp3', 'audio/mp3' ],
									[ 'wav', 'audio/wav' ]
								],
								commit : commitSrc,
								setup : loadSrc
							}]
					},
					{
						type : 'hbox',
						children : [
							{
								type : 'text',
								id : 'src1',
								label : lang.websourceAudio,
								commit : commitSrc,
								setup : loadSrc
							}]
					},
					{
						type : 'hbox',
						widths: [ '100%'],
						children : [
							{
								type: 'checkbox',
								id: 'autoplay',
								label: lang.chkPlay,
								'default': true,
								style : 'float:right',
								commit : commitValue,
								setup : loadValue
							}]
					}
				]
			}

		]
	};
} );
