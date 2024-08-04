import React from 'react';
import Image from 'next/image';

const teamData = {
  winners: [
    {
      year: "2024",
      teams: [
        {
          yearGroup: "First Year (FY)",
          teamName: "Team Alpha",
          members: ["Rishabh Rai", "Ranjeet Choudhary", "Bhargavi Potode"],
        },
        {
          yearGroup: "Second Year (SY)",
          teamName: "Team Swayam",
          members: ["Yash Borkar", "Rohit Dahle", "Kartikey Sapkal"],
        },
        {
          yearGroup: "Third Year (TY/BTech)",
          teamName: "Team SUD",
          members: ["Devanand Kangane", "Soham Nimbalkar", "Ujjwal Makhija"],
        },
      ],
    },
  ],
  runnerUps: [
    {
      year: "2024",
      teams: [
        {
          yearGroup: "First Year (FY)",
          teamName: "HackHarmony",
          members: ["Shivam Hippalgave", "Mrugmai Dudhamande", "Aditya Ubale"],
        },
        {
          yearGroup: "Second Year (SY)",
          teamName: "Code Crunchers",
          members: ["Shripad Khandare", "Parth Kulkarni", "Yash Gunjal"],
        },
        {
          yearGroup: "Third Year (TY/BTech)",
          teamName: "Hustlers",
          members: ["Shreya Dhurde", "Prathamesh Nigde", "Sanyog Mahajan"],
        },
      ],
    },
  ],
  consolationPrize: {
    year: "2024",
    teamName: "Go Rule",
    members: ["Vaishnavi Rode", "Prithviraj Gorule"],
  },
  statistics: {
    registered: 100,
    qualified: 60,
    winners: 3,
    runnerUps: 3,
    consolationPrize: 1,
  },
  images: [
    "datathon2024/1.jpg",
    "datathon2024/2.jpg",
    "datathon2024/3.jpg",
    "datathon2024/4.jpeg",
    "datathon2024/5.jpeg",
    "datathon2024/6.jpg",
    "datathon2024/7.jpeg",
    "datathon2024/8.jpeg",
    "datathon2024/9.jpg",
    "datathon2024/10.jpeg",
    // Add more image paths
  ],
  sponsors: [
    "Sponsor A",
    "Sponsor B",
    "Sponsor C"
  ],
};

function Datathon2024() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-[#FF7F0D]">Datathon 2024 Memories</h1>
        <p className="text-lg mt-2">A look back at the exciting event of Datathon 2024!</p>
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Winners 2024</h2>
        {teamData.winners.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{category.year}</h3>
            {category.teams.map((team, idx) => (
              <div key={idx} className="border border-[#FF7F0D] p-4 rounded-lg mb-4 bg-white shadow-lg">
                <h4 className="text-lg font-semibold">{team.yearGroup} - {team.teamName}</h4>
                <ul className="list-disc ml-5">
                  {team.members.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Runner-Up 2024</h2>
        {teamData.runnerUps.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{category.year}</h3>
            {category.teams.map((team, idx) => (
              <div key={idx} className="border border-[#FF7F0D] p-4 rounded-lg mb-4 bg-white shadow-lg">
                <h4 className="text-lg font-semibold">{team.yearGroup} - {team.teamName}</h4>
                <ul className="list-disc ml-5">
                  {team.members.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Consolation Prize 2024</h2>
        <div className="border border-[#FF7F0D] p-4 rounded-lg mb-4 bg-white shadow-lg">
          <h3 className="text-lg font-semibold">{teamData.consolationPrize.teamName}</h3>
          <ul className="list-disc ml-5">
            {teamData.consolationPrize.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Statistics</h2>
        <ul className="list-disc ml-5 bg-[#FF7F0D] text-white p-4 rounded-lg shadow-lg">
          <li>Total Registered Teams: <span className="font-bold">{teamData.statistics.registered}</span></li>
          <li>Teams Qualified for Second Round: <span className="font-bold">{teamData.statistics.qualified}</span></li>
          <li>Winners from Each Year: <span className="font-bold">{teamData.statistics.winners}</span></li>
          <li>Runner-Ups: <span className="font-bold">{teamData.statistics.runnerUps}</span></li>
          <li>Consolation Prizes: <span className="font-bold">{teamData.statistics.consolationPrize}</span></li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Event Sponsors</h2>
        <div className="flex justify-center mb-8">
          <Image src="datathon2024/11.png" alt="Datathon 2024 Combined" width={800} height={500} className="object-cover rounded-lg shadow-lg"/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {teamData.images.map((imgSrc, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-lg shadow-lg">
              <Image src={imgSrc} alt={`Datathon 2024 Image ${index + 1}`} width={300} height={200} className="object-cover rounded-lg"/>
            </div>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Sponsors</h2>
        <div className="bg-[#FF7F0D] text-white p-4 rounded-lg shadow-lg">
          <ul className="list-disc ml-5">
            {teamData.sponsors.map((sponsor, index) => (
              <li key={index} className="font-bold">{sponsor}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Datathon2024;
