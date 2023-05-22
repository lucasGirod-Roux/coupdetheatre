<?php get_header(); ?>

<div class="bg-relative o-wrapper">
    <picture>
        <source media="(max-width:540px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/graf-haut.png">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/graf.jpg" alt="image de fond" class="c-bg-img"/>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
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
        <?php get_template_part('template-parts/soon'); ?>
    </div>

        

    <!-- Map -->

    <?php get_template_part('template-parts/pre-inscription'); ?>
    <!-- Formulaire contact -->
    <div class="o-wrapper c-contact-form">
        <h2 class="c-contact-form__title">Vous avez une question ?</h2>
        <?php echo do_shortcode('[contact-form-7 id="22" title="contact-home"]') ?>
    </div>
<?php get_footer(); ?>
