! function(_0x8014x3) {
    _0x8014x3.fn.lazyify = function() {
        return this.each(function() {
            var _0x8014x4 = _0x8014x3(this),
                _0x8014x5 = _0x8014x4.attr("data-image"),
                _0x8014x6 = Math.round(_0x8014x4.width()),
                _0x8014x7 = Math.round(_0x8014x4.height()),
                _0x8014x8 = "/w" + _0x8014x6 + "-h" + _0x8014x7 + "-p-k-no-nu",
                _0x8014x9 = "";
            if (_0x8014x5.match("s72-c")) {
                _0x8014x9 = _0x8014x5.replace("/s72-c", _0x8014x8)
            } else {
                if (_0x8014x5.match("w72-h")) {
                    _0x8014x9 = _0x8014x5.replace("/w72-h72-p-k-no-nu", _0x8014x8)
                } else {
                    _0x8014x9 = _0x8014x5
                }
            };
            _0x8014x3(window).on("load resize scroll", _0x8014xa);

            function _0x8014xa() {
                var _0x8014xb = _0x8014x3(window).height(),
                    _0x8014xc = _0x8014x3(window).scrollTop(),
                    _0x8014xd = _0x8014x4.offset().top;
                if (_0x8014xc + _0x8014xb > _0x8014xd) {
                    var _0x8014xe = new Image();
                    _0x8014xe.onload = function() {
                        _0x8014x4.attr("style", "background-image:url(" + this.src + ")").addClass("lazy-ify")
                    }, _0x8014xe.src = _0x8014x9
                }
            }
            _0x8014xa()
        })
    }
}(jQuery);
$("#magify-main-menu").menuify();
$("#magify-main-menu .widget").addClass("show-menu");
$(".search-toggle").on("click", function() {
    $("body").toggleClass("search-active")
});
$(".follow-by-email-text").each(function() {
    var _0x8014xf = $(this),
        _0x8014x10 = followByEmailText;
    if (_0x8014x10 != "") {
        _0x8014xf.text(_0x8014x10)
    }
});
$(".post-body strike").each(function() {
    var _0x8014xf = $(this),
        _0x8014x11 = _0x8014xf.text().trim();
    if (_0x8014x11 == "$ads={1}") {
        _0x8014xf.replaceWith("<div id=\"new-before-ad\"/>")
    };
    if (_0x8014x11 == "$ads={2}") {
        _0x8014xf.replaceWith("<div id=\"new-after-ad\"/>")
    }
});
$("#new-before-ad").each(function() {
    var _0x8014xf = $(this);
    if (_0x8014xf.length) {
        $("#before-ad").appendTo(_0x8014xf)
    }
});
$("#new-after-ad").each(function() {
    var _0x8014xf = $(this);
    if (_0x8014xf.length) {
        $("#after-ad").appendTo(_0x8014xf)
    }
});
$("#main-before-ad .widget").each(function() {
    var _0x8014xf = $(this);
    if (_0x8014xf.length) {
        _0x8014xf.appendTo($("#before-ad"))
    }
});
$("#main-after-ad .widget").each(function() {
    var _0x8014xf = $(this);
    if (_0x8014xf.length) {
        _0x8014xf.appendTo($("#after-ad"))
    }
});
$(".avatar-image-container img").attr("src", function(_0x8014x12, _0x8014x13) {
    _0x8014x13 = _0x8014x13.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg");
    _0x8014x13 = _0x8014x13.replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg");
    return _0x8014x13
});
$(".post-body a").each(function() {
    var _0x8014x12 = $(this),
        _0x8014x14 = _0x8014x12.text().trim(),
        _0x8014x15 = _0x8014x14.split("/"),
        _0x8014x16 = _0x8014x15[0],
        _0x8014x17 = _0x8014x15[1],
        _0x8014x18 = _0x8014x15.pop();
    if (_0x8014x14.match("button")) {
        _0x8014x12.addClass("button").text(_0x8014x16);
        if (_0x8014x17 != "button") {
            _0x8014x12.addClass(_0x8014x17)
        };
        if (_0x8014x18 != "button") {
            _0x8014x12.addClass("colored-button").css({
                'background-color': _0x8014x18
            })
        }
    }
});
$(".post-body strike").each(function() {
    var _0x8014x12 = $(this),
        _0x8014x14 = _0x8014x12.text().trim(),
        _0x8014x19 = _0x8014x12.html();
    if (_0x8014x14.match("contact-form")) {
        _0x8014x12.replaceWith("<div class=\"contact-form\"/>");
        $(".contact-form").append($("#ContactForm1"))
    };
    if (_0x8014x14.match("alert-success")) {
        _0x8014x12.replaceWith("<div class=\"alert-message alert-success short-b\">" + _0x8014x19 + "</div>")
    };
    if (_0x8014x14.match("alert-info")) {
        _0x8014x12.replaceWith("<div class=\"alert-message alert-info short-b\">" + _0x8014x19 + "</div>")
    };
    if (_0x8014x14.match("alert-warning")) {
        _0x8014x12.replaceWith("<div class=\"alert-message alert-warning short-b\">" + _0x8014x19 + "</div>")
    };
    if (_0x8014x14.match("alert-error")) {
        _0x8014x12.replaceWith("<div class=\"alert-message alert-error short-b\">" + _0x8014x19 + "</div>")
    };
    if (_0x8014x14.match("left-sidebar")) {
        _0x8014x12.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>")
    };
    if (_0x8014x14.match("right-sidebar")) {
        _0x8014x12.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>")
    };
    if (_0x8014x14.match("full-width")) {
        _0x8014x12.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>")
    };
    if (_0x8014x14.match("code-box")) {
        _0x8014x12.replaceWith("<pre class=\"code-box short-b\">" + _0x8014x19 + "</pre>")
    };
    var _0x8014x1a = $(".post-body .short-b").find("b");
    _0x8014x1a.each(function() {
        var _0x8014x1b = $(this),
            _0x8014xf = _0x8014x1b.text().trim();
        if (_0x8014xf.match("alert-success") || _0x8014xf.match("alert-info") || _0x8014xf.match("alert-warning") || _0x8014xf.match("alert-error") || _0x8014xf.match("code-box")) {
            _0x8014x1b.replaceWith("")
        }
    })
});
$(".share-links .window-ify,.entry-share .window-ify").on("click", function() {
    var _0x8014x12 = $(this),
        _0x8014x1c = _0x8014x12.data("url"),
        _0x8014x1d = _0x8014x12.data("width"),
        _0x8014x1e = _0x8014x12.data("height"),
        _0x8014x1f = window.screen.width,
        _0x8014x20 = window.screen.height,
        _0x8014x21 = Math.round(_0x8014x1f / 2 - _0x8014x1d / 2),
        _0x8014x22 = Math.round(_0x8014x20 / 2 - _0x8014x1e / 2),
        _0x8014x23 = window.open(_0x8014x1c, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + _0x8014x1d + ",height=" + _0x8014x1e + ",left=" + _0x8014x21 + ",top=" + _0x8014x22);
    _0x8014x23.focus()
});
$(".share-links").each(function() {
    var _0x8014xf = $(this),
        _0x8014x1b = _0x8014xf.find(".show-hid a");
    _0x8014x1b.on("click", function() {
        _0x8014xf.toggleClass("show-hidden")
    })
});
$(".about-author .author-description span a").each(function() {
    var _0x8014x12 = $(this),
        _0x8014x24 = _0x8014x12.text().trim(),
        _0x8014x1c = _0x8014x12.attr("href");
    _0x8014x12.replaceWith("<li class=\"" + _0x8014x24 + "\"><a href=\"" + _0x8014x1c + "\" title=\"" + _0x8014x24 + "\" target=\"_blank\"/></li>");
    $(".author-description").append($(".author-description span li"));
    $(".author-description").addClass("show-icons")
});

function regxify(_0x8014x13) {
    var _0x8014x26 = /[^{\}]+(?=})/g;
    return String(_0x8014x13.match(_0x8014x26)).trim()
}
$("#featured .HTML .widget-content").each(function(_0x8014x27) {
    var _0x8014x12 = $(this),
        _0x8014x16 = _0x8014x12.text().trim(),
        _0x8014x28 = _0x8014x16.toLowerCase(),
        _0x8014x29 = _0x8014x16.split("$");
    _0x8014x29[1] != undefined ? _0x8014x27 = regxify(_0x8014x29[1]) : _0x8014x27 = "";
    ajaxFeatured(_0x8014x12, "featured", 3, _0x8014x27, _0x8014x28)
});
$(".widget-ready .HTML .widget-content").each(function(_0x8014x2a, _0x8014x27, _0x8014x14) {
    var _0x8014x12 = $(this),
        _0x8014x16 = _0x8014x12.text().trim(),
        _0x8014x28 = _0x8014x16.toLowerCase(),
        _0x8014x29 = _0x8014x16.split("$");
    _0x8014x29[1] != undefined ? _0x8014x2a = regxify(_0x8014x29[1]) : _0x8014x2a = "";
    _0x8014x29[2] != undefined ? _0x8014x27 = regxify(_0x8014x29[2]) : _0x8014x27 = "";
    _0x8014x29[3] != undefined ? _0x8014x14 = regxify(_0x8014x29[3]) : _0x8014x14 = "";
    ajaxWidget(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27, _0x8014x28)
});
$(".related-content").each(function() {
    var _0x8014x12 = $(this),
        _0x8014x27 = _0x8014x12.find(".related-tag").attr("data-label"),
        _0x8014x2a = relatedPostsNum;
    ajaxRelated(_0x8014x12, "related", _0x8014x2a, _0x8014x27, "getrelated")
});

function msgError() {
    return "<span class=\"no-posts\"><b>Error:</b> No Results Found</span>"
}

function msgServerError() {
    return "<div class=\"no-posts error-503\"><b>Error loading feeds!</b> Maybe because the connection failed or the blogger server did not respond to the request.</div>"
}

function beforeLoader() {
    return "<div class=\"loader\"/>"
}

function getFeedUrl(_0x8014x14, _0x8014x2a, _0x8014x27) {
    var _0x8014x2f = "";
    switch (_0x8014x27) {
        case "recent":
            _0x8014x2f = "/feeds/posts/summary?alt=json&max-results=" + _0x8014x2a;
            break;
        case "comments":
            if (_0x8014x14 == "list") {
                _0x8014x2f = "/feeds/comments/summary?alt=json&max-results=" + _0x8014x2a
            } else {
                _0x8014x2f = "/feeds/posts/summary/-/" + _0x8014x27 + "?alt=json&max-results=" + _0x8014x2a
            };
            break;
        default:
            _0x8014x2f = "/feeds/posts/summary/-/" + _0x8014x27 + "?alt=json&max-results=" + _0x8014x2a;
            break
    };
    return _0x8014x2f
}

function getPostLink(_0x8014x31, _0x8014x13) {
    for (var _0x8014x32 = 0; _0x8014x32 < _0x8014x31[_0x8014x13].link.length; _0x8014x32++) {
        if (_0x8014x31[_0x8014x13].link[_0x8014x32].rel == "alternate") {
            var _0x8014x33 = _0x8014x31[_0x8014x13].link[_0x8014x32].href;
            break
        }
    };
    return _0x8014x33
}

function getPostTitle(_0x8014x31, _0x8014x13) {
    var _0x8014xe = _0x8014x31[_0x8014x13].title.$t;
    return _0x8014xe
}

function getPostImage(_0x8014x31, _0x8014x13) {
    if ("media$thumbnail" in _0x8014x31[_0x8014x13]) {
        var _0x8014x36 = _0x8014x31[_0x8014x13].media$thumbnail.url;
        if (_0x8014x36.match("img.youtube.com")) {
            _0x8014x36 = _0x8014x36.replace("/default.", "/0.")
        };
        var _0x8014x9 = _0x8014x36
    } else {
        _0x8014x9 = "https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png"
    };
    return _0x8014x9
}

function getPostComments(_0x8014x31, _0x8014x13, _0x8014x33) {
    var _0x8014xe = _0x8014x31[_0x8014x13].author[0].name.$t,
        _0x8014x38 = _0x8014x31[_0x8014x13].author[0].gd$image.src.replace("/s113", "/w55-h55-p-k-no-nu"),
        _0x8014x39 = _0x8014x31[_0x8014x13].title.$t;
    if (_0x8014x38.match("//img1.blogblog.com/img/blank.gif")) {
        var _0x8014x9 = "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg"
    } else {
        var _0x8014x9 = _0x8014x38
    };
    var _0x8014x3a = "<article class=\"custom-item item-" + _0x8014x13 + "\"><a class=\"entry-image-link cmm-avatar\" href=\"" + _0x8014x33 + "\"><span class=\"entry-thumb\" data-image=\"" + _0x8014x9 + "\"/></a><h2 class=\"entry-title\"><a href=\"" + _0x8014x33 + "\">" + _0x8014xe + "</a></h2><p class=\"cmm-snippet excerpt\">" + _0x8014x39 + "</p></article>";
    return _0x8014x3a
}

function getAjax(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27) {
    switch (_0x8014x14) {
        case "featured":
            ;
        case "list":
            ;
        case "related":
            if (_0x8014x27 == undefined) {
                _0x8014x27 = "geterror404"
            };
            var _0x8014x2f = getFeedUrl(_0x8014x14, _0x8014x2a, _0x8014x27);
            $.ajax({
                url: _0x8014x2f,
                type: "GET",
                dataType: "json",
                cache: true,
                beforeSend: function(_0x8014x3c) {
                    switch (_0x8014x14) {
                        case "featured":
                            ;
                        case "related":
                            _0x8014x12.html(beforeLoader()).parent().addClass("show-ify");
                            break;
                        case "list":
                            _0x8014x12.html(beforeLoader());
                            break
                    }
                },
                success: function(_0x8014x3c) {
                    var _0x8014x19 = "";
                    switch (_0x8014x14) {
                        case "featured":
                            _0x8014x19 = "<div class=\"featured-posts\">";
                            break;
                        case "list":
                            _0x8014x19 = "<div class=\"custom-widget\">";
                            break;
                        case "related":
                            _0x8014x19 = "<div class=\"related-posts\">";
                            break
                    };
                    var _0x8014x3d = _0x8014x3c.feed.entry;
                    if (_0x8014x3d != undefined) {
                        for (var _0x8014x13 = 0, _0x8014x31 = _0x8014x3d; _0x8014x13 < _0x8014x31.length; _0x8014x13++) {
                            var _0x8014x33 = getPostLink(_0x8014x31, _0x8014x13),
                                _0x8014x3e = getPostTitle(_0x8014x31, _0x8014x13, _0x8014x33),
                                _0x8014x3f = getPostImage(_0x8014x31, _0x8014x13, _0x8014x33);
                            var _0x8014x40 = "";
                            switch (_0x8014x14) {
                                case "featured":
                                    _0x8014x40 += "<article class=\"featured-item post item-" + _0x8014x13 + "\"><div class=\"featured-item-inner\"><a class=\"entry-image-link\" href=\"" + _0x8014x33 + "\"><span class=\"entry-thumb\" data-image=\"" + _0x8014x3f + "\"/></a><div class=\"entry-header entry-info\"><h2 class=\"entry-title\"><a href=\"" + _0x8014x33 + "\">" + _0x8014x3e + "</a></h2></div></div></article>";
                                    break;
                                case "list":
                                    switch (_0x8014x27) {
                                        case "comments":
                                            var _0x8014x3a = getPostComments(_0x8014x31, _0x8014x13, _0x8014x33);
                                            _0x8014x40 += _0x8014x3a;
                                            break;
                                        default:
                                            _0x8014x40 += "<article class=\"custom-item item-" + _0x8014x13 + "\"><a class=\"entry-image-link\" href=\"" + _0x8014x33 + "\"><span class=\"entry-thumb\" data-image=\"" + _0x8014x3f + "\"/></a><div class=\"entry-header\"><h2 class=\"entry-title\"><a href=\"" + _0x8014x33 + "\">" + _0x8014x3e + "</a></h2></div></article>";
                                            break
                                    };
                                    break;
                                case "related":
                                    _0x8014x40 += "<article class=\"related-item post item-" + _0x8014x13 + "\"><div class=\"related-item-inner\"><a class=\"entry-image-link\" href=\"" + _0x8014x33 + "\"><span class=\"entry-thumb\" data-image=\"" + _0x8014x3f + "\"/></a><div class=\"entry-header entry-info\"><h2 class=\"entry-title\"><a href=\"" + _0x8014x33 + "\">" + _0x8014x3e + "</a></h2></div></div></article>";
                                    break
                            };
                            _0x8014x19 += _0x8014x40
                        }
                    } else {
                        _0x8014x19 = msgError()
                    };
                    _0x8014x19 += "</div>";
                    _0x8014x12.html(_0x8014x19);
                    _0x8014x12.find("span.entry-thumb").lazyify()
                },
                error: function() {
                    _0x8014x12.html(msgServerError())
                }
            })
    }
}

function ajaxFeatured(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27, _0x8014x28) {
    if (_0x8014x28.match("getfeatured")) {
        if (_0x8014x14 == "featured") {
            return getAjax(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27)
        } else {
            _0x8014x12.html(beforeLoader()).parent().addClass("show-ify");
            setTimeout(function() {
                _0x8014x12.html(msgError())
            }, 500)
        }
    }
}

function ajaxWidget(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27, _0x8014x28) {
    if (_0x8014x28.match("getwidget")) {
        if (_0x8014x14 == "list") {
            return getAjax(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27)
        } else {
            _0x8014x12.html(msgError())
        }
    }
}

function ajaxRelated(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27, _0x8014x28) {
    if (_0x8014x28.match("getrelated")) {
        return getAjax(_0x8014x12, _0x8014x14, _0x8014x2a, _0x8014x27)
    }
}
$(".blog-post-comments").each(function() {
    var _0x8014x12 = $(this),
        _0x8014x44 = commentsSystem,
        _0x8014x45 = "<div class=\"fb-comments\" data-width=\"100%\" data-href=\"" + disqus_blogger_current_url + "\" order_by=\"time\" data-numposts=\"5\"></div>",
        _0x8014x46 = "comments-system-" + _0x8014x44;
    switch (_0x8014x44) {
        case "blogger":
            _0x8014x12.addClass(_0x8014x46).show();
            $(".entry-meta .entry-comments-link").addClass("show");
            break;
        case "disqus":
            _0x8014x12.addClass(_0x8014x46).show();
            break;
        case "facebook":
            _0x8014x12.addClass(_0x8014x46).find("#comments").html(_0x8014x45);
            _0x8014x12.show();
            break;
        case "hide":
            _0x8014x12.hide();
            break;
        default:
            _0x8014x12.addClass("comments-system-default").show();
            $(".entry-meta .entry-comments-link").addClass("show");
            break
    };
    var _0x8014x47 = _0x8014x12.find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),
        _0x8014x48 = _0x8014x12.find(".comments .toplevel-thread > #top-continue");
    _0x8014x47.on("click", function() {
        _0x8014x48.show()
    });
    _0x8014x48.on("click", function() {
        _0x8014x48.hide()
    })
});
$(function() {
    $(".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar").lazyify();
    $(".mobile-logo").each(function() {
        var _0x8014xf = $(this),
            _0x8014x49 = $("#main-logo .header-widget a").clone();
        _0x8014x49.find("#h1-tag").remove();
        _0x8014x49.appendTo(_0x8014xf)
    });
    $("#mobile-menu").each(function() {
        var _0x8014xf = $(this),
            _0x8014x4a = $("#magify-main-menu-nav").clone();
        _0x8014x4a.attr("id", "main-mobile-nav");
        _0x8014x4a.appendTo(_0x8014xf);
        $(".show-mobile-menu, .hide-mobile-menu, .overlay").on("click", function() {
            $("body").toggleClass("nav-active")
        });
        $(".mobile-menu .has-sub").append("<div class=\"submenu-toggle\"/>");
        $(".mobile-menu ul li .submenu-toggle").on("click", function(_0x8014x12) {
            if ($(this).parent().hasClass("has-sub")) {
                _0x8014x12.preventDefault();
                if (!$(this).parent().hasClass("show")) {
                    $(this).parent().addClass("show").children(".m-sub").slideToggle(170)
                } else {
                    $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170)
                }
            }
        })
    });
    $(".social-mobile").each(function() {
        var _0x8014xf = $(this),
            _0x8014x49 = $("#social-icons ul.social").clone();
        _0x8014x49.appendTo(_0x8014xf)
    
    }, 1000);
    $("#header-wrapper .headerify").each(function() {
        var _0x8014x12 = $(this);
        if (fixedMenu == true) {
            if (_0x8014x12.length > 0) {
                var _0x8014x4 = $(document).scrollTop(),
                    _0x8014x4b = _0x8014x12.offset().top,
                    _0x8014x4c = _0x8014x12.height(),
                    _0x8014x39 = (_0x8014x4b + _0x8014x4c);
                $(window).scroll(function() {
                    var _0x8014xe = $(document).scrollTop(),
                        _0x8014x4d = $("#footer-wrapper").offset().top,
                        _0x8014x4e = (_0x8014x4d - _0x8014x4c);
                    if (_0x8014xe < _0x8014x4e) {
                        if (_0x8014xe > _0x8014x39) {
                            _0x8014x12.addClass("is-fixed")
                        } else {
                            if (_0x8014xe <= 0) {
                                _0x8014x12.removeClass("is-fixed")
                            }
                        };
                        if (_0x8014xe > _0x8014x4) {
                            _0x8014x12.removeClass("show")
                        } else {
                            _0x8014x12.addClass("show")
                        };
                        _0x8014x4 = $(document).scrollTop()
                    }
                })
            }
        }
    });
    $("#main-wrapper,#sidebar-wrapper").each(function() {
        if (fixedSidebar == true) {
            $(this).theiaStickySidebar({
                additionalMarginTop: 20,
                additionalMarginBottom: 20
            })
        }
    });
    $(".back-top").each(function() {
        var _0x8014xf = $(this);
        $(window).on("scroll", function() {
            $(this).scrollTop() >= 100 ? _0x8014xf.fadeIn(250) : _0x8014xf.fadeOut(250);
            _0x8014xf.offset().top >= $("#footer-wrapper").offset().top - 32 ? _0x8014xf.addClass("on-footer") : _0x8014xf.removeClass("on-footer")
        }), _0x8014xf.click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        })
    });
    $("p.comment-content").each(function() {
        var _0x8014xf = $(this);
        _0x8014xf.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, "<img src=\"$1\"/>");
        _0x8014xf.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, "<iframe id=\"youtube\" width=\"100%\" height=\"358\" src=\"https://www.youtube.com/embed/$1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>")
    });
    $("#load-more-link").each(function() {
        var _0x8014x12 = $(this),
            _0x8014x4f = _0x8014x12.data("load");
        if (_0x8014x4f) {
            $("#load-more-link").show()
        };
        $("#load-more-link").on("click", function(_0x8014x3) {
            $("#load-more-link").hide();
            $.ajax({
                url: _0x8014x4f,
                success: function(_0x8014x3c) {
                    var _0x8014x50 = $(_0x8014x3c).find(".blog-posts");
                    _0x8014x50.find(".index-post").addClass("post-animated post-fadeInUp");
                    $(".blog-posts").append(_0x8014x50.html());
                    _0x8014x4f = $(_0x8014x3c).find("#load-more-link").data("load");
                    if (_0x8014x4f) {
                        $("#load-more-link").show()
                    } else {
                        $("#load-more-link").hide();
                        $("#blog-pager .no-more").addClass("show")
                    };
                    $(".index-post .entry-image-link .entry-thumb").lazyify()
                },
                beforeSend: function() {
                    $("#blog-pager .loading").show()
                },
                complete: function() {
                    $("#blog-pager .loading").hide()
                }
            });
            _0x8014x3.preventDefault()
        })
    })
})
//]]>