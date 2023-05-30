<?php get_header(); ?>

<div class="bg-relative o-wrapper">
    <picture>
        <source media="(max-width:900px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home-mobile.png">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png" alt="image de fond" class="c-bg-img"/>
    </picture>
</div>
<div class="o-wrapper c-page-inscr">
    <h1 class="c-page-inscr__title">Bienvenue sur la page pré inscription</h1>
    <p class="c-page-inscr__subtitle">
        C’est super ! Cependant il faut savoir que la pratique
        théâtrale demande de la rigueur, de l’assiduité ainsi
        que de la disponibilité pour mener à bien nos représentation ! Nos projets de spectacles commencent dès septembre où les
        inscriptions vont se finaliser.
    </p>
    <div class="bg-relative">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/arrow1.png" alt="Fléche" class="c-inscr__arrow1"/>
    </div>

    <p class="c-page-inscr__txt">
    Vous pouvez cependant à tout moment faire une demande de pré-inscription. Vos coordonnées seront conservées et déposer sur notre liste d’attente. Nous vous contacterons fin mai / début juin pour la validation ou non de votre inscription (en fonction des places disponibles dans nos groupes).
    </p>
    <div class="bg-relative">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/arrow2.png" alt="Fléche" class="c-inscr__arrow2"/>
    </div>
    <p class="c-page-inscr__form-txt">Un petit entretien vous sera proposé en ce qui concerne les demandes adultes.</p>
    <?php echo do_shortcode('[sibwp_form id=2]') ?>
</div>
<?php get_footer(); ?>
