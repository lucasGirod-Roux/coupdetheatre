<div class="c-artcl-mini">
    <div class="c-artcl-mini__bloc-img">
        <?php echo get_the_post_thumbnail($post_id, 'custom-size-mini', array('class' => 'lazyload c-artcl-mini__img', 'alt' => get_the_title())); ?>
    </div>
    <div class="c-artcl-mini__bloc-txt">
        <h3 class="c-artcl-mini__title-artcl"><?php the_title(); ?></h3>
        <div class="c-artcl-mini__lieu"><?php the_field('salle'); ?></div>
        <div class="c-artcl-mini__ville"><?php the_field('ville'); ?></div>
        <div class="c-artcl-mini__date"><?php the_field('date'); ?></div>
        <div class="c-artcl-mini__bloc-buy">
            <!-- <span class="c-artcl-mini__price">dès <span class="price-primary">3,00€</span></span> -->
            <a href="<?php the_permalink() ?>" rel="bookmark" class="c-arcl-mini__btn" href="">Voir la pièce</a>
        </div>
    </div>
</div>
