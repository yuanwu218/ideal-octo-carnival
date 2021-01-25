CKEDITOR.plugins.add( 'audio',
{
	lang : [ 'zh-cn' ],
	init : function( editor )
	{
		var lang = editor.lang.audio;
		if (typeof editor.element.data == 'undefined')
		{
			alert('The "audio" plugin requires CKEditor 3.5 or newer');
			return;
		}
		CKEDITOR.dialog.add( 'audio', this.path + 'dialogs/audio.js' );
		editor.addCommand( 'Audio', new CKEDITOR.dialogCommand( 'audio' ) );
		editor.ui.addButton( 'Audio',
			{
				label : lang.toolbar,
				command : 'Audio',
				icon : this.path + 'images/audio.png'
			} );
	}
} );
CKEDITOR.plugins.setLang( 'audio', 'zh-cn', { audio :
	{
		toolbar	: '添加音频/视频',
		dialogTitle : '添加音频/视频',
		fakeObject : '音视',
		properties : '编辑音频/视频',
		widthRequired : '宽度字段不能为空',
		heightRequired : '高度字段不能为空',
		poster: '封面图片',
		sourceAudio: '文件地址',
		websourceAudio: '第三方视频通用代码',
		chkPlay: '自动播放',
		sourceType : '文件类型',
		linkTemplate :  '<a href="%src%">%type%</a> ',
		fallbackTemplate : '您的浏览器不支持 video 标签.<br>请下载该文件后播放: %links%'

	}
} );