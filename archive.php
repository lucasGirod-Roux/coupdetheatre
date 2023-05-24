<?php get_header(); ?>
<div class="c-cat o-wrapper">
<?php
// WPc QUERY
$artcl_head_id=array();
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
                $artcl_head_id[]= get_the_id();
                $i++;
            endwhile; ?>
        </div>
        <div class="c-soon__bloc-txt">
            <p>Télécharger le programme 2023 au format PDF <a class="tkt-primary" href="<?php the_field('programme'); ?>">ici</a></p>
        </div>
    <?php wp_reset_postdata(); ?>

    <?php else : ?>
        <p>Désolé il n'y a aucun article</p>
    <?php endif; ?>
</div>


<?php
// WPc QUERY
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$cat_focus = new WP_Query(array(
    'category_name' => single_cat_title("", false),
    'posts_per_page' => 6,
    'paged' => $paged,
    'orderby' => 'date',
    'post__not_in' => $artcl_head_id,
));
?>
<div class="c-cat-list">
    <?php if ($cat_focus->have_posts()) : ?>
        <h2 class="c-soon__title">Vous avez manqué</h2>
        <div class="c-soon">
            <?php $i = 0;
            while ($cat_focus->have_posts()) : $cat_focus->the_post();
                get_template_part('template-parts/bloc-article');
                $i++;
            endwhile; ?>
        </div>

        <div class="c-pagination">
            <?php
            echo paginate_links(array(
                'current' => max(1, get_query_var('paged')),
                'show_all' => false,
                'type'     => 'plain',
                'end_size' => 8,
                'mid_size' => 1,
                'prev_text' =>  file_get_contents(get_template_directory_uri() . '/assets/img/bs-icons/arrow-left.svg'),
                'next_text' =>  file_get_contents(get_template_directory_uri() . '/assets/img/bs-icons/arrow-right.svg')
            ));
            ?>
        </div>
    <?php wp_reset_postdata(); ?>

    <?php else : ?>
        <p>Désolé il n'y a aucun article</p>
    <?php endif; ?>
</div>

</div>

<?php get_footer(); ?>