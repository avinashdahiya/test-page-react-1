import React from "react";

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
    <div className="max-w-sm mx-auto bg-gradient-to-br from-green-100 via-white to-green-100 rounded-2xl shadow-xl p-6 mt-10
                    hover:shadow-2xl transition-shadow duration-500">
      <img
        className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-green-600 mb-6 shadow-lg"
        src={image}
        alt={name}
      />
      <h2 className="text-3xl font-extrabold text-green-800 mb-3 text-center">{name}</h2>
      <p className="text-gray-700 mb-6 text-center leading-relaxed">{bio}</p>
      
      <div className="space-y-3 text-gray-700 px-4">
        <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-green-700 hover:underline">{contact.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="text-green-700 hover:underline">{contact.phone}</a></p>
        <p><strong>Location:</strong> <span>{contact.location}</span></p>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 active:scale-95 transition-transform duration-200 shadow-md"
          onClick={() => alert(`Hello from ${name}!`)}
        >
          Say Hi 👋
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
