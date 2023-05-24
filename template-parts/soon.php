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
        </div>
        <div class="c-soon__bloc-txt">
            <p>Télécharger le programme 2023 au format PDF <a class="tkt-primary" href="<?php the_field('programme'); ?>">ici</a></p>
            <a href="/category/piece/" class="c-soon-btn">Voir plus</a>
        </div>
    <?php wp_reset_postdata(); ?>

    <?php else : ?>
        <p>Désolé il n'y a aucun article</p>
    <?php endif; ?>
</div>
