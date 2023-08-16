<?php get_header(); ?>
<div class="c-artcl-page o-wrapper">
    <div class="c-artcl-header">
        <div class="c-artcl-header-flex">
            <div class="c-artcl__bloc-picture"> 
                <?php if (get_the_post_thumbnail()): ?>
                    <?php echo get_the_post_thumbnail($post_id, 'custom-size-big', array('class' => 'lazyload c-artcl__header-img', 'alt' => get_the_title())); ?>
                <?php else : ?>
                    <img class="lazyload c c-artcl__header-default-img" src="<?php echo get_template_directory_uri(); ?>/assets/img/default-fallback-image.jpg" alt="<?php get_the_title() ?>">
                <?php endif; ?>
                <p>Une pièce de <span><?php the_field('auteur'); ?></span></p>
                <p>Mise en scène par <span><?php the_field('metteur_en_scene'); ?></span></p>
            </div>
            <div class="c-artcl__bloc-txt">
                <h1 class="c-artcl__title"><?php the_title(); ?></h1>
                <?php foreach (get_the_tags($post_id) as $category) { ?>
                    <span class="c-artcl__cat"> <?php echo $category->cat_name; ?></span>
                <?php } ?>
                <p class="c-artcl-inf__title">Informations</p>
                <div class="c-artcl-bloc-inf">
                    <span class="c-artcl__inf-label">Date</span>
                    <span class="c-artcl__inf"><?php the_field('date'); ?></span>
                </div>
                <div class="c-artcl-bloc-inf">
                    <span class="c-artcl__inf-label">Les Décors</span>
                    <span class="c-artcl__inf"><?php the_field('decors'); ?></span>
                </div>
                <div class="c-artcl-bloc-inf">
                    <span class="c-artcl__inf-label">Adresse</span>
                    <p class="c-artcl__inf c-artcl-adress">
                        <span class="c-artcl-salle"><?php the_field('salle'); ?></span>
                        <span class="c-artcl-ville"><?php the_field('ville'); ?></span>
                    </p>
                </div>
                <div class="c-artcl-bloc-inf">
                    <span class="c-artcl__inf-label">Distribution</span>
                    <span class="c-artcl__inf"><?php the_field('acteur'); ?></span>
                </div>
            </div>
            <div class="c-artcl__reserved">
                <p class="c-artcl-mini__price">dès <span class="price-primary">3,00€</span></p>
                <a href="#" rel="bookmark" class="c-arcl-mini__btn" href="">Réserver</a>
            </div>
        </div>
    </div>
</div>
    
    <div class="bg-relative">
        <picture>
            <source media="(max-width:540px)" srcset="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/histoire-mobile.png">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/page-article.png" alt="image de fond" class="c-bg-img__artcile"/>
        </picture>
    </div>

    <!--  Content  -->
    <div class="o-wrapper c-artcl__content">
        <h2 class="c-artcl-content__title">Histoire</h2>
        <div class="c-artcl-content__txt">
            <?php the_content() ?>
        </div>
    </div>

    <?php 
    $images = get_field('galerie');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)

    if( $images ): ?>

    <div class="o-wrapper c-artcl-galerie">
        <h2 class="c-artcl-content__title">Galerie</h2>
        <div class="c-artcl_galerie__section">
            <?php foreach( $images as $image_id ): ?>
                <a class="c-artcl-galerie__item" target="_blank" href="<?php echo wp_get_attachment_url( $image_id ); ?>">
          			<?php echo wp_get_attachment_image( $image_id, $size ); ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
    <?php endif; ?>

    <!--  Comments  -->
    <div class="c-comments o-wrapper">
            <?php 
                // If comments are open or there is at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) {
                    comments_template();
                }
            ?> 
    </div>

<?php get_footer(); ?>