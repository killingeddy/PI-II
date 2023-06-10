// POSTS UTILS
const getAllPosts = () => {
    return `
    select p.*, u.name, u.email
    FROM public.post p
    inner join public.users u on p.user_id = u.id 
    ORDER BY p.n_likes DESC;
    `;
}

const getHighlightedPosts = () => {
    return `
    select p.*, u.name, u.email
    FROM public.post p
    inner join public.users u on p.user_id = u.id
    order by n_likes desc
    limit 6;
    `;
}

const getPostById = (id) => {
    return `
    select p.*, u.name, u.email
    FROM public.post p
    inner join public.users u on p.user_id = u.id
    WHERE p.id = ${id};
    `;
}

const createPost = (post) => {
    return `
    INSERT INTO public.post (user_id, title, post_content)
    VALUES (${post.user_id}, '${post.title}', '${post.post_content}')
    RETURNING *;
    `;
}

const updatePost = (post, id) => {
    return `
    UPDATE public.post
    SET title = '${post.title}', post_content = '${post.post_content}'
    WHERE id = ${id}
    RETURNING *;
    `;
}

const getPostComments = (id) => {
    return `
    SELECT users_comments.*, u.name, u.email
    FROM public.users_comments
    inner join public.users u on users_comments.user_id = u.id
    WHERE post_id = ${id};
    `;
}

// COMMENTS UTILS
const createComment = (comment, id) => {
    return `
    INSERT INTO public.users_comments (user_id, post_id, comment_content, n_likes)
    VALUES (${comment.user_id}, ${id}, '${comment.comment_content}', 0)
    RETURNING *;
    UPDATE public.post
    SET n_comments = n_comments + 1
    WHERE id = ${id};
    `;
}

// LIKES UTILS
const createLike = (like, id) => {
    return `
    INSERT INTO public.user_likes (user_id, post_id)
    VALUES (${like.user_id}, ${id});
    UPDATE public.post
    SET n_likes = n_likes + 1
    WHERE id = ${id};
    `;
}

const deleteLike = (like, id) => {
    return `
    DELETE FROM public.user_likes
    WHERE user_id = ${like.user_id} AND post_id = ${id};
    UPDATE public.post
    SET n_likes = n_likes - 1
    WHERE id = ${id};
    `;
}

module.exports = {
    getAllPosts,
    getHighlightedPosts,
    getPostById,
    createPost,
    updatePost,
    getPostComments,
    createComment,
    createLike,
    deleteLike
};