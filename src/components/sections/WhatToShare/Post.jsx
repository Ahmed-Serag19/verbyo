import PropTypes from 'prop-types';
const Post = ({ image, title, body }) => {
  return (
    <div className="post-container flex mx-auto flex-col gap-7 bg-custom-bg p-5 rounded-xl max-w-lg">
      <div className="post-img-container">
        <img src={image} className="w-full h-80" alt={title} />
      </div>
      <div className="body-container h-40 bg-white px-6 py-3  mb-1 rounded-lg m-auto">
        <h1 className="font-bold text-lg py-2">{title}</h1>
        <p className="text-gray-600">{body}</p>
      </div>
    </div>
  );
};
Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
