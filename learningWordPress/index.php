<?php

get_header(); ?>
	
	<!-- site-content -->
	<div class="site-content clearfix">
		
		<!-- main-column -->
		<div class="main-column">

			<?php if (current_user_can('administrator')) : ?>
			<div class="admin-quick-add">
				<h3>Quick Add Post</h3>
				<input type="text" name="title" placeholder="Title">
				<textarea name="content" placeholder="Content"></textarea>
				<button id="quick-add-button">Create Post</button>
			</div>
			<?php endif; ?>

			<?php if (have_posts()) :
				while (have_posts()) : the_post();

				get_template_part('content', get_post_format());

				endwhile;

				echo paginate_links();

				else :
					echo '<p>No content found</p>';

				endif;
				?>

		</div><!-- /main-column -->

		<?php get_sidebar(); ?>
		
	</div><!-- /site-content -->
	
	<?php get_footer();

?>