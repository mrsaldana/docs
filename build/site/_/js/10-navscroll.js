function showNav(){var o=$("#nav_bar").outerHeight();$("#nav_bar").addClass("fixed_top"),$("#nav_bar").css("top","0px"),$("#toc_column").css("top",o+"px"),1440<window.outerWidth&&$("#toc_inner").css("margin-top",o+"px"),$("#toc_indicator").css("margin-top",o+"px"),$("#code_column").css({position:"fixed",top:o+"px"}),$("body").css("margin-top",o+"px"),$("#mobile_toc_accordion_container").hasClass("fixed_toc_accordion")&&$("#mobile_toc_accordion_container").css("top",o+"px"),"fixed"===$("#tablet_toc_accordion_container").css("position")&&$("#tablet_toc_accordion_container").css("top",o+"px"),$(".toolbar").css("top",o+"px"),window.outerWidth<1024?($(".nav-container").css("top",o+$(".toolbar").outerHeight()+"px"),$(".nav").css("top","")):$(".nav").css("top",o+"px"),$(".contentStickyBreadcrumbHeader").css("top",o+$(".toolbar").outerHeight()+"px")}function hideNav(){$("#nav_bar").removeClass("fixed_top"),$("#nav_bar").css({top:"-60px"}),$("#toc_column").css("top","0px"),1440<window.outerWidth&&$("#toc_inner").css("margin-top","0px"),$("#toc_indicator").css("margin-top","0px"),$("#code_column").css({position:"fixed",top:"0px"}),$("body").css("margin-top","0px"),$("#mobile_toc_accordion_container").css("top","0px"),$("#tablet_toc_accordion_container").css("top","0px"),$(".toolbar").css("top","0px"),window.outerWidth<1024?$(".nav-container").css("top",$(".toolbar").outerHeight()+"px"):$(".nav-container").css("top",""),$(".nav").css("top",""),$(".contentStickyBreadcrumbHeader").css("top",$(".toolbar").outerHeight()+"px")}$(document).ready(function(){var t=0;$(window).scroll(function(){var o=$(this).scrollTop();o>$("#nav_bar").outerHeight()?($(".toolbar").css("position","sticky"),t<o?hideNav():showNav()):($("#code_column").css({position:"absolute",top:""}),$(".toolbar").css({position:"static",top:""}),$(".nav").css("top","")),0==o&&($("#nav_bar").removeClass("fixed_top"),$("body").css("margin-top","0px"),$("#toc_column").css({position:"",top:""})),"function"==typeof isBackgroundBottomVisible&&isBackgroundBottomVisible()&&handleTOCScrolling(),t=o}),$(window).on("resize",function(){"sticky"==$(".toolbar").css("position")&&$("#nav_bar").hasClass("fixed_top")&&$(".toolbar").css("top",$("#nav_bar").outerHeight()+"px")})});
//# sourceMappingURL=10-navscroll.js.map