<?php

/**
 * Comment Form Placeholder Author, Email, URL
 */
function placeholder_author_email_form_fields($fields) {
    $replace_author = __('Mon nom', 'coupdetheatre');
    $replace_email = __('Mon email', 'coupdetheatre');

    $fields['author'] = '<p class="comment-form-author u-mb-3">' . '<label for="author">' . __( 'Nom', 'coupdetheatre' ) . '</label> ' .
    '<input id="author" class="c-comments__input" name="author" type="text" placeholder="'.$replace_author.'" value="' . esc_attr( $commenter['comment_author'] ) . '" size="20"' . $aria_req . ' /></p>';
                    
    $fields['email'] = '<p class="comment-form-email u-mb-3"><label for="email">' . __( 'Email', 'coupdetheatre' ) . '</label> ' .
    '<input id="email" class="c-comments__input" name="email" type="text" placeholder="'.$replace_email.'" value="' . esc_attr(  $commenter['comment_author_email'] ) .
    '" size="30"' . $aria_req . ' /></p>';
    
    return $fields;
}

/**
 * Comment Form Placeholder Comment Field
 */
function placeholder_comment_form_field($fields) {
    $replace_comment = __('Mon commentaire', 'coupdetheatre');
     
    $fields['comment_field'] = '<p class="comment-form-comment u-mb-3"><label for="comment">' . _x( 'Comment', 'noun' ) .
    '</label><textarea id="comment" class="c-comments__input" name="comment" cols="45" rows="6" placeholder="'.$replace_comment.'" aria-required="true"></textarea></p>';
    
    return $fields;
 }

add_filter('comment_form_default_fields','placeholder_author_email_form_fields');
add_filter( 'comment_form_defaults', 'placeholder_comment_form_field' );