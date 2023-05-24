<?php get_header(); ?>

<div class="bg-relative o-wrapper">
    <picture>
        <source media="(max-width:540px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home-mobile.png">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/graf.jpg" alt="image de fond" class="c-bg-img"/>
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
    <p class="c-page-inscr__txt">
    Vous pouvez cependant à tout moment faire une demande de pré-inscription. Vos coordonnées seront conservées et déposer sur notre liste d’attente. Nous vous contacterons fin mai / début juin pour la validation ou non de votre inscription (en fonction des places disponibles dans nos groupes).
    </p>
</div>
<?php get_footer(); ?>
