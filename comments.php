<?php
/**
 * The template for displaying comments
 */
if ( post_password_required() ) {
	return;
}
?>

<h2 class="c-artcl-comments__title">Livre d'or</h2>
<div class="c-comments-section">

    <div class="c-comments__grid">
        <?php
        comment_form(
            array(
                'class_container'       => 'c-comments-write',
                'class_form'            => 'c-comments-form',
                'title_reply'           => null,
                'comment_notes_before'  => '<h2 class="c-artcl-comments__title2">donner votre avis</h2>',
                'logged_in_as'          => '',
                'label_submit'          => 'Envoyer',
                'submit_button'         => '<input name="%1$s" type="submit" class="btn c-comments__btn-submit %3$s" value="%4$s" />',
            )
        );
        ?>
        <?php
        if ( have_comments() ) :
            ?>
            
            <ol class="c-comments-list">
                <!-- .comments-title -->
                <?php
                wp_list_comments(
                    array(
                        'avatar_size' => null,
                        'style'       => 'ol',
                        'short_ping'  => true,
                        'reverse_top_level'  => true,
                    )
                );
                ?>
            </ol>

            <style>.c-no_comment{display: none;}</style>

            <?php
            the_comments_pagination();		
            ?>

            <?php if ( ! comments_open() ) : ?>
                <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'coupdetheatre' ); ?></p>
            <?php endif; ?>

        <?php endif; ?>
    </div>

</div>
<!-- #comments -->
