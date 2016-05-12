
/* HANDLEBARS HELPERS */

Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});


//Handlebars.registerPartial('myPartial', '{{name}}');

/* Partials */
Handlebars.registerPartial('template_hd_breadcrumb', Handlebars.compile($('#template_hd_breadcrumb').html()) );


Handlebars.registerPartial('template_home_video_1', Handlebars.compile($('#template_home_video_1').html()) );
Handlebars.registerPartial('template_home_video_2', Handlebars.compile($('#template_home_video_2').html()) );
Handlebars.registerPartial('template_home_eyewear_1', Handlebars.compile($('#template_home_eyewear_1').html()) );
Handlebars.registerPartial('template_home_eyewear_2', Handlebars.compile($('#template_home_eyewear_2').html()) );
Handlebars.registerPartial('template_home_eyewear_3', Handlebars.compile($('#template_home_eyewear_3').html()) );
Handlebars.registerPartial('template_home_men_1', Handlebars.compile($('#template_home_men_1').html()) );
Handlebars.registerPartial('template_home_women_1', Handlebars.compile($('#template_home_women_1').html()) );
Handlebars.registerPartial('template_home_women_2', Handlebars.compile($('#template_home_women_2').html()) );
Handlebars.registerPartial('template_home_bags_1', Handlebars.compile($('#template_home_bags_1').html()) );
Handlebars.registerPartial('template_home_stores_1', Handlebars.compile($('#template_home_stores_1').html()) );

Handlebars.registerPartial('template_home_acne_1', Handlebars.compile($('#template_home_acne_1').html()) );


Handlebars.registerPartial('template_women_accessories_1', Handlebars.compile($('#template_women_accessories_1').html()) );
Handlebars.registerPartial('template_women_accessories_2', Handlebars.compile($('#template_women_accessories_2').html()) );
Handlebars.registerPartial('template_women_accessories_3', Handlebars.compile($('#template_women_accessories_3').html()) );
Handlebars.registerPartial('template_women_video_1', Handlebars.compile($('#template_women_video_1').html()) );
Handlebars.registerPartial('template_women_bags_1', Handlebars.compile($('#template_women_bags_1').html()) );
Handlebars.registerPartial('template_women_bags_2', Handlebars.compile($('#template_women_bags_2').html()) );
Handlebars.registerPartial('template_women_categories_1', Handlebars.compile($('#template_women_categories_1').html()) );
Handlebars.registerPartial('template_women_assistance_1', Handlebars.compile($('#template_women_assistance_1').html()) );
Handlebars.registerPartial('template_women_slg_1', Handlebars.compile($('#template_women_slg_1').html()) );
Handlebars.registerPartial('template_women_coats_1', Handlebars.compile($('#template_women_coats_1').html()) );
Handlebars.registerPartial('template_women_eyewear_1', Handlebars.compile($('#template_women_eyewear_1').html()) );
Handlebars.registerPartial('template_women_knitwear_1', Handlebars.compile($('#template_women_knitwear_1').html()) );


Handlebars.registerPartial('template_includetest', Handlebars.compile($('#template_includetest').html()) );
Handlebars.registerPartial('template_includetest2', Handlebars.compile($('#template_includetest2').html()) );


