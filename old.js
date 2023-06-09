! function(e) {
	"use strict";
	var t = {
		init: function() {
			var i = t,
				o = {
					"jet-woo-product-gallery-grid.default": i.productGalleryGrid,
					"jet-woo-product-gallery-modern.default": i.productGalleryModern,
					"jet-woo-product-gallery-anchor-nav.default": i.productGalleryAnchorNav,
					"jet-woo-product-gallery-slider.default": i.productGallerySlider
				};
			e.each(o, function(e, t) {
				window.elementorFrontend.hooks.addAction("frontend/element_ready/" + e, t)
			}), e(".woocommerce div.product").hasClass("product-type-variable") && e(document).on("show_variation", function(e, t) {
				i.showVariationImage(t)
			}).on("reset_image", function(e, t) {
				i.showVariationImage(t)
			})
		},
		showVariationImage: function(t) {
			var i = e(document).find(".product").find(".jet-woo-product-gallery");
			e.each(i, function() {
				if (e(this).is("[data-variation-images]")) {
					var i = e(this).data("variation-images"),
						o = e(this).find(".jet-woo-product-gallery-slider"),
						a = o.data("swiper-settings"),
						r = null,
						n = null,
						l = e(this).children().data("featured-image"),
						s = e(this).data("gallery-settings").videoFirst ? 1 : 0,
						c = o.find(".jet-woo-product-gallery__image-item").length;
					a && a.loop && c > 1 ? (r = e(this).find('.jet-woo-product-gallery__image-item[data-swiper-slide-index = "' + s + '"]'), n = e(this).find('.jet-woo-swiper-control-thumbs__item[data-swiper-slide-index = "' + s + '"] img')) : (r = e(this).find(".jet-woo-product-gallery__image-item").eq(s), n = e(this).find(".jet-woo-swiper-control-thumbs__item").eq(s).find("img"));
					var d = r.find(".wp-post-image"),
						p = r.find("a").eq(0);
					if (l || (d = r.find(".wp-post-gallery")), t && t.image && t.image.src && t.image.src.length > 1) {
						var u = i[t.image_id];
						! function(e, t) {
							d.wc_set_variation_attr("src", t.src), d.wc_set_variation_attr("height", t.src_h), d.wc_set_variation_attr("width", t.src_w), d.wc_set_variation_attr("srcset", t.srcset), d.wc_set_variation_attr("sizes", t.sizes), d.wc_set_variation_attr("title", e.image.title), d.wc_set_variation_attr("data-caption", e.image.caption), d.wc_set_variation_attr("alt", e.image.alt), d.wc_set_variation_attr("data-src", t.src), d.wc_set_variation_attr("data-large_image", t.full_src), d.wc_set_variation_attr("data-large_image_width", t.full_src_w), d.wc_set_variation_attr("data-large_image_height", t.full_src_h), r.wc_set_variation_attr("data-thumb", t.src), p.wc_set_variation_attr("href", e.image.full_src), n.wc_set_variation_attr("src", e.image.thumb_src), n.wc_set_variation_attr("width", e.image.thumb_src_w), n.wc_set_variation_attr("height", e.image.thumb_src_h), n.wc_set_variation_attr("srcset", "")
						}(t, u)
					} else d.wc_reset_variation_attr("src"), d.wc_reset_variation_attr("width"), d.wc_reset_variation_attr("height"), d.wc_reset_variation_attr("srcset"), d.wc_reset_variation_attr("sizes"), d.wc_reset_variation_attr("title"), d.wc_reset_variation_attr("data-caption"), d.wc_reset_variation_attr("alt"), d.wc_reset_variation_attr("data-src"), d.wc_reset_variation_attr("data-large_image"), d.wc_reset_variation_attr("data-large_image_width"), d.wc_reset_variation_attr("data-large_image_height"), r.wc_reset_variation_attr("data-thumb"), p.wc_reset_variation_attr("href"), n.wc_reset_variation_attr("src"), n.wc_reset_variation_attr("width"), n.wc_reset_variation_attr("height")
				}
			}), e(document).trigger("jet-woo-gallery-variation-image-change")
		},
		productGallerySlider: function(i) {
			const o = i.find(".jet-woo-product-gallery-slider"),
				a = o.data("swiper-settings"),
				r = i.find(".jet-woo-product-gallery").data("gallery-settings") || i.data("gallery-settings"),
				n = t.getElementorElementSettings(i);
			if (o.find(".jet-woo-product-gallery__image-item").length > 1) {
				let s = {
					autoHeight: a.autoHeight,
					centeredSlides: a.centeredSlides,
					direction: a.direction,
					effect: a.effect,
					longSwipesRatio: a.longSwipesRatio,
					loop: a.loop,
					slidesPerView: 1,
					breakpoints: a.breakpoints,
					touchReleaseOnEdges: !0
				};
				if (a.centeredSlides && !e.isEmptyObject(n)) {
					s.slidesPerView = +n.slider_center_mode_slides || 4, s.spaceBetween = +n.slider_center_mode_space_between ? +n.slider_center_mode_space_between : 0;
					const e = {
						slidesPerView: "slider_center_mode_slides_",
						spaceBetween: "slider_center_mode_space_between_"
					};
					s.breakpoints = t.handleSwiperBreakpoints(n, s, e)
				}
				if (a.showNavigation && (s.navigation = {
						nextEl: ".jet-swiper-button-next",
						prevEl: ".jet-swiper-button-prev"
					}), a.showPagination)
					if ("thumbnails" === a.paginationType) {
						const r = i.find(".jet-woo-swiper-gallery-thumbs"),
							l = o.data("swiper-thumb-settings");
						let c = {
							breakpoints: l.breakpoints,
							direction: l.direction,
							freeMode: a.loop,
							loop: a.loop,
							slidesPerView: 4,
							spaceBetween: 10,
							watchSlidesVisibility: !0,
							watchSlidesProgress: !0
						};
						if (l.showNavigation && (c.navigation = {
								nextEl: ".jet-thumb-swiper-nav.jet-swiper-button-next",
								prevEl: ".jet-thumb-swiper-nav.jet-swiper-button-prev"
							}), !e.isEmptyObject(n)) {
							c.slidesPerView = +n.pagination_thumbnails_columns, c.spaceBetween = +n.pagination_thumbnails_space_between ? +n.pagination_thumbnails_space_between : 0;
							const e = {
								slidesPerView: "pagination_thumbnails_columns_",
								spaceBetween: "pagination_thumbnails_space_between_"
							};
							c.breakpoints = t.handleSwiperBreakpoints(n, c, e)
						}
						s.thumbs = {
							swiper: new Swiper(r, c)
						};
						let d = 0;
						window.elementorFrontend && !e.isEmptyObject(n) ? (d = +n.pagination_thumbnails_columns, "desktop" !== window.elementorFrontend.getCurrentDeviceMode() && (d = +n["pagination_thumbnails_columns_" + window.elementorFrontend.getCurrentDeviceMode()])) : e.each(l.breakpoints, (t, i) => {
							e(window).width() > t && (d = i.slidesPerView)
						}), d >= r.find(".jet-woo-swiper-control-thumbs__item:not(.swiper-slide-duplicate)").length && (r.addClass("jet-woo-swiper-gallery-thumbs-no-nav"), r.find(".jet-swiper-nav").hide(), r.find(".swiper-slide-duplicate").hide())
					} else s.pagination = {
						el: ".swiper-pagination",
						type: "dynamic" !== a.paginationControllerType ? a.paginationControllerType : "bullets",
						clickable: !0,
						dynamicBullets: !("dynamic" !== a.paginationControllerType && !a.dynamicBullets)
					};
				s.on = {
					init: function() {
						a.loop && o.find(".swiper-slide-duplicate video.jet-woo-product-video-player").removeAttr("autoplay")
					},
					imagesReady: function() {
						if ("self_hosted" === r.videoType) {
							const t = o.find(".jet-woo-product-gallery--with-video");
							"horizontal" === a.direction ? (r.videoAutoplay && r.videoFirst && (setTimeout(function() {
								c.updateAutoHeight(100)
							}, 300), a.autoHeight || l(t)), a.autoHeight && t.on("click", () => {
								setTimeout(function() {
									c.updateAutoHeight(100)
								}, 300)
							})) : t.each(function() {
								r.videoAutoplay && l(e(this)), e(this).on("click", () => {
									l(e(this))
								})
							})
						}
						if ("vertical" === a.direction) {
							o.find(".jet-woo-product-gallery__image-item img").each(function() {
								let t = e(this);
								t.height() > o.height() && t.css({
									height: o.height() + "px",
									width: "auto"
								})
							})
						}
						let t = !1;
						e(document).on("jet-woo-gallery-variation-image-change", () => {
							let e = 0;
							t && r.videoFirst && (e = 1), a.loop ? c.slideToLoop(e, 300, !0) : c.slideTo(e, 300, !0), t = !0
						})
					}
				};
				const c = new Swiper(o, s)
			} else i.find(".jet-swiper-nav").hide(), i.find(".swiper-pagination").hide();

			function l(e) {
				e.find(".mejs-container").hasClass("mejs-container-fullscreen") ? e.find(".mejs-controls").removeAttr("style") : setTimeout(function() {
					e.height() > o.height() && e.find(".mejs-controls").css({
						top: o.height() + "px",
						bottom: "auto",
						transform: "translateY(-100%)"
					})
				}, 300)
			}
			t.productGallery(i)
		},
		productGalleryGrid: function(e) {
			t.productGallery(e)
		},
		productGalleryModern: function(e) {
			t.productGallery(e)
		},
		productGalleryAnchorNav: function(i) {
			var o, a, r, n = i.find(".jet-woo-product-gallery__image-item"),
				l = i.find(".jet-woo-product-gallery-anchor-nav-items"),
				s = i.find(".jet-woo-product-gallery-anchor-nav-controller"),
				c = s.find("li a"),
				d = [],
				p = !1,
				u = 0,
				_ = 0,
				w = e("#wpadminbar");

			function g() {
				e(n).each(function() {
					var t = e(this).attr("id");
					d[t] = e(this).offset().top
				})
			}

			function m() {
				for (var t in d) _ >= d[t] - u && (e(s).find("a.current-item").removeClass("current-item"), e(s).find('a[data-index="' + t + '"]').addClass("current-item"))
			}
			w.length && (u = w.outerHeight()), t.productGallery(i), g(), o = !1, a = !1, r = !1, e(window).on("scroll", function() {
				var t = e(window).scrollTop(),
					i = e(l).outerHeight(!0),
					n = e(s).outerHeight(!0),
					c = e(l).offset().top,
					d = e(s).offset().top,
					p = c + i,
					_ = d + n;
				p - n - u <= t || (!0 === a && !1 === r && e(s).css({
					top: t - c + u + "px"
				}), t < d && t < _ && (o = !1, a = !0, e(s).css({
					top: t - c + u + "px"
				})), !1 === o && t > c && (o = !0, a = !0, r = !1), !1 === o && c > t && (o = !1, a = !1, r = !1, e(s).removeAttr("style")))
			}), e(window).scroll(function() {
				p || (g(), _ = e(document).scrollTop(), m())
			}), _ = e(document).scrollTop(), m(), e(c).on("click", function() {
				m();
				var t = e(this).data("index"),
					i = d[t];
				if (p = !0, e(s).find("a.current-item").removeClass("current-item"), e(this).addClass("current-item"), t, e(this).parents().hasClass("jet-popup")) {
					let t = e(this).closest(".jet-popup__container-inner");
					e(t).animate({
						scrollTop: i - e(t).offset().top + 1
					}, "fast", function() {
						p = !1
					})
				} else e("html, body").animate({
					scrollTop: i - u + 1
				}, "fast", function() {
					p = !1
				});
				return !1
			})
		},
		productGallery: function(t) {
			var i = t.data("id") || t.parent().data("block-id"),
				o = t.find(".jet-woo-product-gallery").data("gallery-settings") || t.data("gallery-settings"),
				a = t.find(".jet-woo-product-gallery__image-item:not(.swiper-slide-duplicate) .jet-woo-product-gallery__image:not(.image-with-placeholder)"),
				r = t.find(".jet-woo-product-gallery__image--with-zoom"),
				n = j(),
				l = t.find(".jet-woo-product-gallery__trigger"),
				s = e(".jet-woo-product-gallery-pswp")[0],
				c = t.find(".jet-woo-product-video__popup-button"),
				d = t.find(".jet-woo-product-video__popup-overlay"),
				p = t.find(".jet-woo-product-video-iframe"),
				u = !!p[0] && p[0].src,
				_ = t.find(".jet-woo-product-video-player"),
				w = t.find(".jet-woo-product-video-mejs-player"),
				g = w.data("controls") || ["playpause", "current", "progress", "duration", "volume", "fullscreen"],
				m = t.find(".jet-woo-product-video__overlay"),
				h = m.length > 0;
			if (o) {
				var f = {
						mainClass: t.parent().data("block-id") ? i + "-jet-woo-product-gallery" : i ? "jet-woo-product-gallery-" + i : "",
						captionEl: o.caption ? o.caption : "",
						fullscreenEl: !!o.fullscreen && o.fullscreen,
						zoomEl: !!o.zoom && o.zoom,
						shareEl: !!o.share && o.share,
						counterEl: !!o.counter && o.counter,
						arrowEl: !!o.arrows && o.arrows,
						closeOnScroll: !1
					},
					v = o.videoAutoplay,
					y = o.videoFirst;
				o.enableGallery && (l.on("click.JetWooProductGallery", function(i) {
					if (i.preventDefault(), e("body").hasClass("elementor-editor-active")) return;
					var o, a = e(i.target),
						r = t.find(".jet-woo-product-gallery__image-item.featured").hasClass("no-image"),
						l = a.parents(".jet-woo-product-gallery__image-item"),
						c = l.data("swiper-slide-index");
					o = void 0 !== c ? c : e(l).index();
					(r || y) && (o -= 1);
					f.index = o, new PhotoSwipe(s, PhotoSwipeUI_Default, n, f).init()
				}), e(document).on("jet-woo-gallery-variation-image-change", function() {
					n = j()
				})), o.enableZoom && (b(), e(document).on("jet-woo-gallery-variation-image-change", b)), o.hasVideo && function() {
					switch (o.videoIn) {
						case "content":
							m[0] && (m.on("click.JetWooProductGallery", function(t) {
								_[0] && function(t) {
									let i = "";
									e(t).hasClass("jet-woo-product-video__overlay") ? (i = e(t).siblings().find(".jet-woo-product-video-player")[1], e(t).remove()) : (i = e(t).parents(".jet-woo-product-video__overlay").siblings().find(".jet-woo-product-video-player")[1], e(t).parents(".jet-woo-product-video__overlay").remove());
									i.play(), h = !1
								}(t.target), p[0] && i(t)
							}), v && p[0] && i(event)), _ && _.each(function() {
								e(this).on("play.JetWooProductGallery", function() {
									h && (m.remove(), h = !1)
								})
							}), w[0] && t();
							break;
						case "popup":
							t(), c.on("click.JetWooProductGallery", function(e) {
								! function() {
									c.siblings(".jet-woo-product-video__popup-content").addClass("jet-woo-product-video__popup--show"), _[0] && (_[0].play(), v || (_[0].pause(), _[0].currentTime = 0));
									p[0] && (p[0].src = u, v && (p[0].src = p[0].src.replace("&autoplay=0", "&autoplay=1")))
								}()
							}), d.on("click.JetWooProductGallery", function(e) {
								! function() {
									c.siblings(".jet-woo-product-video__popup-content").removeClass("jet-woo-product-video__popup--show"), p[0] && (p[0].src = "");
									_ && (_[0].currentTime = 0, _[0].pause())
								}()
							})
					}

					function t() {
						w.mediaelementplayer({
							videoVolume: "horizontal",
							hideVolumeOnTouchDevices: !1,
							enableProgressTooltip: !1,
							features: g,
							autoplay: !1
						}).load()
					}

					function i(t) {
						if (v) p.each(function() {
							e(this).parents(".jet-woo-product-gallery__image-item").hasClass("swiper-slide-duplicate") && (e(this)[0].src = e(this)[0].src.replace("&autoplay=1", "&autoplay=0"))
						});
						else {
							let i = "";
							(i = e(t.target).hasClass("jet-woo-product-video__overlay") ? e(t.target).siblings().find(".jet-woo-product-video-iframe") : e(t.target).parents(".jet-woo-product-video__overlay").siblings().find(".jet-woo-product-video-iframe"))[0].src = i[0].src.replace("&autoplay=0", "&autoplay=1")
						}
						m.remove(), h = !1
					}
				}()
			}

			function b() {
				var t = !1,
					i = {
						magnify: o.zoomMagnify,
						touch: !1
					};
				r.each(function(i, o) {
					var a = e(o).find("img"),
						r = a.parent().width();
					a.data("large_image_width") > r && (t = !0)
				}), t && ("ontouchstart" in document.documentElement && (i.on = "click"), r.trigger("zoom.destroy"), r.zoom(i))
			}

			function j() {
				var t = [];
				return a.length > 0 && a.each(function(i, o) {
					var a = e(o).find("img");
					if (a.length) {
						var r = {
							src: a.attr("data-large_image"),
							w: a.attr("data-large_image_width"),
							h: a.attr("data-large_image_height"),
							title: a.attr("data-caption") ? a.attr("data-caption") : a.attr("title")
						};
						t.push(r)
					}
				}), t
			}
			e(".jet-woo-product-gallery__image-item").find("img").on("click", function(e) {
				e.preventDefault()
			})
		},
		getElementorElementSettings: function(e) {
			return window.elementorFrontend && window.elementorFrontend.isEditMode() && e.hasClass("elementor-element-edit-mode") ? t.getEditorElementSettings(e) : e.data("settings") || {}
		},
		getEditorElementSettings: function(e) {
			var t, i = e.data("model-cid");
			return i && window.elementorFrontend.hasOwnProperty("config") && window.elementorFrontend.config.hasOwnProperty("elements") && window.elementorFrontend.config.elements.hasOwnProperty("data") && (t = window.elementorFrontend.config.elements.data[i]) ? t.toJSON() : {}
		},
		handleSwiperBreakpoints: function(e, t, i) {
			const o = window.elementorFrontend.config.responsive.activeBreakpoints,
				a = elementorFrontend.breakpoints.getBreakpointValues(),
				r = {
					mobile: 2,
					tablet: 3
				};
			let n = t.slidesPerView,
				l = 10;
			return t.breakpoints = {}, Object.keys(o).reverse().forEach(a => {
				const s = r[a] ? r[a] : n;
				l = +e[i.spaceBetween + a] ? +e[i.spaceBetween + a] : 0, t.breakpoints[o[a].value] = {
					slidesPerView: +e[i.slidesPerView + a] || s,
					spaceBetween: l
				}, n = +e[i.slidesPerView + a] || s
			}), Object.keys(t.breakpoints).forEach(e => {
				const i = parseInt(e);
				let r;
				if (i === o.mobile.value || i + 1 === o.mobile.value) r = 0;
				else if (!o.widescreen || i !== o.widescreen.value && i + 1 !== o.widescreen.value) {
					const e = a.findIndex(e => i === e || i + 1 === e);
					r = a[e - 1]
				} else r = i;
				t.breakpoints[r] = t.breakpoints[i], t.breakpoints[i] = {
					slidesPerView: t.slidesPerView,
					spaceBetween: t.spaceBetween
				}
			}), t.breakpoints
		}
	};
	e(window).on("elementor/frontend/init", t.init), e(() => JetPlugins.init()), JetPlugins.bulkBlocksInit([{
		block: "jet-gallery/gallery-anchor-nav",
		callback: t.productGalleryAnchorNav,
		condition: () => "loading" !== document.readyState
	}, {
		block: "jet-gallery/gallery-grid",
		callback: t.productGalleryGrid,
		condition: () => "loading" !== document.readyState
	}, {
		block: "jet-gallery/gallery-modern",
		callback: t.productGalleryModern,
		condition: () => "loading" !== document.readyState
	}, {
		block: "jet-gallery/gallery-slider",
		callback: t.productGallerySlider,
		condition: () => "loading" !== document.readyState
	}]), window.JetGallery = t
}(jQuery);