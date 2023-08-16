<?php get_header(); ?>

<div class="bg-relative o-wrapper">
    <picture>
        <source media="(max-width:900px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home-mobile.png">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png" alt="image de fond" class="c-bg-img"/>
    </picture>
</div>


    <div class="o-wrapper c-home">
        <div class="c-home__bloc-title">
            <h1 class="c-home-title">
                Coup de théâtre<br/>
                Bienvenue dans l'univers de<br/>
                notre association<br/>
            </h1>
            
            <h2 class="c-home-subtitle">
                Dynamiser la créativité pour traverser les defis et relever ensemble L'espace des possibles
            </h2>
        </div>
        <div class="c-home-desc">
            <p class="c-home-desc__txt">
            L’association est née en juillet 2003. A sa création, elle ne comptait que 7 membres. 
            Aujourd’hui, elle compte une soixantaine de membres formant 6 groupes ! 
            </p>
            <ol class="c-home-desc__list">
                <li>Groupes Arlequin (8-10 ans): <strong>mercredi</strong>  de <strong>13h30-15h</strong></li>
                <li>Groupes Figaro (10-12 ans): <strong>mercredi</strong> de <strong>15h15-16h30</strong></li>
                <li>Groupes Briguella (12-15 ans): <strong>mercredi</strong> de <strong>16h45-18h</strong></li>
                <li>Groupes Scapin (15-20 ans): <strong>lundi</strong> de <strong>18h-20h</strong></li>
                <li>Groupes Molière (adulte): <strong>lundi</strong> de <strong>20h-22h</strong></li>
                <li>Groupes Marivaux (adulte): <strong>mercredi</strong> de <strong>20h-22h</strong></li>
            </ol>
        </div>
    </div>
    <!-- Histoire -->
    <div class="bg-relative ">
        <picture>
            <source media="(max-width:540px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/histoire-mobile.png">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/graph-story.png" alt="image de fond" class="c-bg-img__story"/>
        </picture>
    </div>
    <div class="c-story o-wrapper">
        <div class="c-story__bloc-txt">
            <h2 class="c-story__title">
                Un collectif créatif & engagé
            </h2>
            <div class="c-story__txt">
                Chaque groupe réalise un travail collectif pour la réalisation d’un ou plusieurs Week end de représentations. 
                L’association affirme que même s’il y a un travail d’apprentissage de texte mais également d’expression corporelle, 
                les ateliers au sein de celle-ci sont un lieu de détente et d’épanouissement individuel, et non un lieu 
                d’acquisition de savoir comme une classe d’école peut l’être
            </div>
        </div>
    </div>

    <div class="o-wrapper">
        <!-- Membres -->

        <!-- Prochainement -->
        <?php
        // WPc QUERY
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $cat_focus = new WP_Query(array(
            'category_name' => single_cat_title("", false),
            'posts_per_page' => 3,
            'paged' => $paged,
            'tag' => 'favori',
            'orderby' => 'date',
            'offset' => 0,
        ));
        ?>
        <div class="c-bloc-soon">
            <h2 class="c-soon__title">Prochainement</h2>
            <?php if ($cat_focus->have_posts()) : ?>
            <div class="c-soon">
                <?php $i = 0;
                while ($cat_focus->have_posts()) : $cat_focus->the_post();
                    get_template_part('template-parts/bloc-article');
                    $i++;
                endwhile; ?>
                <?php wp_reset_postdata(); ?>

                <?php else : ?>
                    <p>Désolé il n'y a aucun article</p>
                <?php endif; ?>
                <div class="c-soon__bloc-txt">
                    <p>Télécharger le programme 2023 au format PDF 
                        <?php
                        // WPc QUERY
                        $programme = new WP_Query(array(
                            'post_type' => 'programme',
                            'posts_per_page' => 1,
                        ));
                        ?>
                        <?php $i = 0;
                        while ($programme->have_posts()) : $programme->the_post(); ?>
                            <a class="tkt-primary" target="_blank" href="<?php the_field('programme'); ?>" >ici</a>
                        <?php $i++; endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                    </p>
                    <a href="/category/pieces/" class="c-soon-btn">Voir plus</a>
                </div>
            </div>
        </div>
        

    </div>

    <!-- Pre inscription -->

    <?php get_template_part('template-parts/pre-inscription'); ?>
    
    <!-- Map -->

    <?php // echo do_shortcode('[mappress mapid="1"]') ?>
    <div class="c-map o-wrapper">
        <div class="c-map__item">
            <div class="c-map__bloc-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            </div>
            <div class="c-map__inf">22 rue Jean Jacob</br>59116 Houplines</div>
        </div>

        <div class="c-map__item">
            <div class="c-map__bloc-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            </div>
            <div class="c-map__inf">Coup de théatre -</br>09 52 91 88 85</div>
        </div>

        <div class="c-map__item">
            <div class="c-map__bloc-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            </div>
            <div class="c-map__inf">Envoyez vos mails à</br>coupdetheatre@gmail.com</div>
        </div>
    </div>

    <!-- Formulaire contact -->
    <div id="contact" class="o-wrapper c-contact-form">
        <h2 class="c-contact-form__title">Vous avez une question ?</h2>
        <?php echo do_shortcode('[contact-form-7 id="805" title="contact-home"]') ?>
    </div>
<?php get_footer(); ?>
