<?php
$z[0]=Array("global","",277,304);
$z[0][4]=array();
$z[0][4]['name']="cfg_keywords";
$z[1]=Array("global","",344,374);
$z[1][4]=array();
$z[1][4]['name']="cfg_description";
$z[2]=Array("global","",387,413);
$z[2][4]=array();
$z[2][4]['name']="cfg_webname";
$z[3]=Array("include","",1012,1047);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("arclist","\r\n    <div class=\"block\">\r\n      <h2><span class=\"category\"> <a href=\"[field:typeurl/]\" rel=\"category tag\" >[field:typename/]</a> <i class=\"fa fa-caret-right\"></i></span><a href=\"[field:arcurl/]\"  target=\"_ablank\" >[field:title/]</a></h2>\r\n      <div class=\"clear\"></div>\r\n      [field:array runphp='yes']@me = (strpos(@me['litpic'],'defaultpic') ? \"\" : \"\r\n      <div class='viewimg'> <a href='{@me['arcurl']}' title='{@me['title']}' target='_ablank' class='ipic'> <img src='{@me['litpic']}' alt='{@me['title']}' class='thumbnail' /><span class='shine' style='background-position: 160px 50%;'> </span></a> </div>\r\n      \"); [/field:array]\r\n      <div class=\"preview\"> [field:description function=\"cn_substr(@me,600)\"/]…… </div>\r\n      <div class=\"preem\"> <span><i class=\"fa fa-clock-o\"></i> [field:pubdate function=\"MyDate('m-d',@me)\"/] </span><span><i class=\"fa fa-comment-o\"></i> <a href=\"[field:arcurl/]\" class=\"ds-thread-count\" data-thread-key=\"156\">暂无评论</a> </span><span><i class=\"fa fa-eye\"></i> [field:click/] </span><span> </span><span class=\"more\"><a href=\"[field:arcurl/]\" title=\"[field:title/]\">阅读详情</a></span> </div>\r\n    </div>\r\n    ",1613,2833);
$z[4][4]=array();
$z[4][4]['row']="10";
$z[4][4]['titlelen']="160";
$z[5]=Array("type"," <a href=\"[field:typelink/]\">点击查看更多</a>",2875,2960);
$z[5][4]=array();
$z[5][4]['typeid']="8";
$z[6]=Array("include","",2987,3023);
$z[6][4]=array();
$z[6][4]['filename']="right.htm";
$z[7]=Array("include","",3059,3096);
$z[7][4]=array();
$z[7][4]['filename']="footer.htm";

?>