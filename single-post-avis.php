<?php get_header(); ?>

<div class="c-artcl-page c-artcl-avis o-wrapper">
    <h2 class="c-artcl-content__title">Bienvenue sur l'espace des avis</h2>
    <!--  Comments  -->
    <div class="c-comments">
            <?php 
                // If comments are open or there is at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) {
                    comments_template();
                }
            ?> 
    </div>
</div>
<div class="bg-relative">
    <picture>
        <source media="(max-width:540px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/circle-footer.png">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/circle-footer.png" alt="image de fond" class="c-bg-img__footer"/>
    </picture>
</div>
<?php get_footer(); ?>