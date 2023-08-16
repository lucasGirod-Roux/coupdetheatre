<?php get_header(); ?>

<div class="o-wrapper c-page">
    <h1 class="c-artcl__title u-mb-5"><?php the_title(); ?></h1>

    <!--  Content  -->
    <div class="c-page__content">
        <?php the_content() ?>
    </div>
</div>
<?php get_footer(); ?>
