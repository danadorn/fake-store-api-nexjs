import UserCard from "@/components/fs-card/UserCard";
import { UserType } from "@/lib/type/userResponse";

export default async function UserPage(){
    const user = await fetch(`https://api.escuelajs.co/api/v1/users`)
    const users: UserType[] = await user.json();
    return(
        <div >
                {
                    users.map((users, index)=>(
                        <UserCard
                        key = {index}
                        avatar={users.avatar}
                        name={users.name}
                        email={users.email}
                        creationAt={users.creationAt}
                        updatedAt={users.updatedAt}
                        />
                    ))
                }
        </div>
    )
}