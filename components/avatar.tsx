import Image from "next/image"
import {AvatarImgURL} from "../lib/constants"

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={AvatarImgURL}
          width={500}
          height={500}
          className="rounded-full"
          alt={name}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
