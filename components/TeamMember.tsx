// components/TeamMember.tsx
interface TeamMemberProps {
  name: string
  role: string
  bio: string
  specialty?: string   // optional
  member?: string      // optional
}

export default function TeamMember({ name, role, bio, specialty, member }: TeamMemberProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-xl font-semibold text-blue-500">{name}</h3>
      <p className="text-gray-600">{role}</p>
      {specialty && <p className="text-gray-600 italic">{specialty}</p>}
      {member && <p className="text-gray-600 font-medium">Member: {member}</p>}
      <p className="mt-2 text-gray-700">{bio}</p>
    </div>
  )
}
