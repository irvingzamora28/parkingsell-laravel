/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "body-pattern": "url('../img/pattern.png')",
                banner: "url(../img/backbanner.png)",
            }),
            backgroundPosition: {
                "banner-position": "-12rem -12rem",
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "from-bottom": "fromBottom 500ms linear",
                "from-right": "fromRight 500ms linear",
                "bg-banner": "backBanner 20s linear infinite",
                "text-banner": "showBannerText 8s linear",
                "show-card-icon": "showCardIcon 300ms linear",
                "show-card-category": "showCardCategory 300ms linear",
                "show-card-description": "showCardDescription 300ms linear",
            },
            keyframes: {
                fromBottom: {
                    "0%": { transform: "translateY(0%)" },
                    "50%": { transform: "translateY(200%)" },
                    "100%": { transform: "translateY(0%)" },
                },
                fromRight: {
                    "0%": { transform: "translateX(200%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                backBanner: {
                    "0%": { "background-position": "0rem 0rem" },
                    "100%": { "background-position": "-18rem -22rem" },
                },
                showBannerText: {
                    "0%": {
                        transform: "translateX(-600%) scale(5,5)",
                        opacity: 1,
                    },
                    "50%": {
                        transform: "translateX(600%) scale(5,5)",
                        opacity: 1,
                    },
                    "75%": {
                        transform: "translateX(-600%) scale(5,5)",
                        opacity: 0,
                        "text-shadow": "none",
                        color: "transparent",
                    },
                    "100%": {
                        transform: "translateX(0%) scale(1,1)",
                        opacity: 1,
                        "text-shadow": "2px 2px 1px black",
                        color: "white",
                    },
                },
                showCardIcon: {
                    "0%": {
                        transform: "translateY(-200%) scale(0.5,0.5)",
                    },
                    "100%": {
                        transform: "translateY(0%) scale(1,1)"
                    }
                },
                showCardCategory: {
                    "0%": {
                        transform: "translateY(-300%)",
                    },
                    "100%": {
                        transform: "translateY(0%)"
                    }
                },
                showCardDescription: {
                    "0%": {
                        transform: "translateX(-200%)",
                    },
                    "100%": {
                        transform: "translateX(0%)"
                    }
                }
            },
        },
    },
    plugins: [],
};
