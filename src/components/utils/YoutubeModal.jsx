import PropTypes from 'prop-types';

const YoutubeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('video-modal')) {
      onClose();
    }
  };

  return (
    <div
      className="fixed video-modal inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-black rounded-lg pt-10 pb-2 px-1 max-w-6xl w-full aspect-video">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-700 transition duration-300 text-2xl"
        >
          &#x2715;
        </button>
        <div className="w-full h-full">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/kE-M9kWmnpQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

YoutubeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default YoutubeModal;
