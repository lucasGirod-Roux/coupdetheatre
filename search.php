<?php get_header(); ?>
<div class="c-cat o-wrapper">
<?php
    // WP QUERY
    $paged_list = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $search = (get_query_var('s'));
    $query = new WP_Query(array(
        'category_name' => 'pieces',
        'posts_per_page' => 12,
        'paged' => $paged_list,
        's' => $search,
    )); ?>
    <h1 class="u-h2 u-mb-5">
        <?php esc_html_e('Il y a','cdt') ?>
        <?php
        $search_query = get_search_query();
        get_nbr_of_articles($query);
        /* translators: %s: search query. */
        if ("" !== $search_query){
            printf(esc_html__('correspondant à "%s".', '_s'), '<span>' . get_search_query() . '</span>');
        }
        ?>
    </h1>
    <div class="c-cat-list">
        <?php if ($query->have_posts()) : ?>
            <div class="c-list-artcl">
                <?php $i = 0;
                while ($query->have_posts()) : $query->the_post();
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
        <?php endif; ?>

    </div>

</div>

<?php get_footer(); ?>