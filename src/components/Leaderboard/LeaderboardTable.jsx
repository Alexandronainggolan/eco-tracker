// src/components/Leaderboard/LeaderboardTable.jsx

export default function LeaderboardTable({
  users,
}) {
  return (
    <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden">
      <div className="grid grid-cols-4 bg-green-600 text-white font-bold p-5">
        <div>Ranking</div>
        <div>Nama</div>
        <div>Points</div>
        <div>Badge</div>
      </div>

      {users.map((user, index) => (
        <div
          key={user.id}
          className="grid grid-cols-4 items-center p-5 border-b"
        >
          <div>{index + 1}</div>

          <div className="font-semibold">
            {user.name}
          </div>

          <div className="text-green-700 font-bold">
            {user.points}
          </div>

          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              {user.badge}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}