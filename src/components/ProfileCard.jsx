const ProfileCard = () => {
  const name = "Howard Schultz";
  const image =
    "https://a.storyblok.com/f/182663/2000x1125/635962ce4b/howard-schultz_former-ceo-of-starbucks.png/m/1920x0/filters:quality(100)";
  const bio =
    "Howard Schultz is the visionary businessman behind Starbucks' global expansion. He transformed the coffee industry by turning Starbucks into a third place between home and work. As former CEO and chairman, his leadership emphasized community, innovation, and premium experiences.";
  const contact = {
    email: "howard.schultz@starbucks.com",
    phone: "+1 (206) 555-1234",
    location: "Seattle, Washington, USA",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow text-center mt-8">
      <img
        className="w-full h-56 object-cover rounded mb-4"
        src={image}
        alt={name}
      />
      <h2 className="text-2xl font-bold text-green-800 mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{bio}</p>
      <p className="mb-1">
        <strong>Email:</strong> <span className="text-gray-600">{contact.email}</span>
      </p>
      <p className="mb-1">
        <strong>Phone:</strong> <span className="text-gray-600">{contact.phone}</span>
      </p>
      <p className="mb-4">
        <strong>Location:</strong> <span className="text-gray-600">{contact.location}</span>
      </p>
      <div className="flex justify-center">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          onClick={() => alert(`Hello from ${name}!`)}
        >
          Say Hi
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
