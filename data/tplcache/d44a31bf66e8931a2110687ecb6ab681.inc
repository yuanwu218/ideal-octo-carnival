<div class="block">
      <h2><span class="category"> <a href="[field:typeurl/]" rel="category tag" >[field:typename/]</a> <i class="fa fa-caret-right"></i></span><a href="[field:arcurl/]"  target="_ablank" >[field:title/]</a></h2>
      <div class="clear"></div>
      [field:array runphp='yes']@me = (strpos(@me['litpic'],'defaultpic') ? "" : "
      <div class='viewimg'> <a href='{@me['arcurl']}' title='{@me['title']}' target='_ablank' class='ipic'> <img src='{@me['litpic']}' alt='{@me['title']}' class='thumbnail' /><span class='shine' style='background-position: 160px 50%;'> </span></a> </div>
      "); [/field:array]
      <div class="preview"> [field:description function="cn_substr(@me,600)"/]…… </div>
      <div class="preem"> <span><i class="fa fa-clock-o"></i> [field:pubdate function="MyDate('m-d',@me)"/] </span><span><i class="fa fa-comment-o"></i> <a href="[field:arcurl/]" class="ds-thread-count" data-thread-key="156">暂无评论</a> </span><span><i class="fa fa-eye"></i> [field:click/] </span><span> </span><span class="more"><a href="[field:arcurl/]" title="[field:title/]">阅读详情</a></span> </div>
    </div>