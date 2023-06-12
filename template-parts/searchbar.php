<form role="search" method="get" action="<?php echo get_site_url() ?>" class="c-search c-search--right">
    <input type="hidden" name="controller" value="search">
    <input class="c-search__input form-control" type="text" name="s"
           placeholder="Rechercher" aria-label="Search">
    <button type="submit" class="c-search__btn btn btn-link">
        <span class="c-search__btn-icon c-icon c-icon--center-y">
            <?php echo file_get_contents(get_template_directory_uri() . '/assets/img/bs-icons/search.svg') ?>
        </span>
    </button>
</form>