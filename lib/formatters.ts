import { duration } from "drizzle-orm/gel-core"


export default function formatEventDescription(durationInMinutes:number):string {

    const hours = Math.floor(durationInMinutes/60)
    const minutes = durationInMinutes % 60
    
    const minutesString = `${minutes} ${minutes > 1 ? "mins" : "min"}`

    const hoursString = `${hours} ${hours > 1 ? "hrs": "hr"}`

    if(hours === 0) return  minutesString

    if(minutes === 0) return hoursString 

    return `${hoursString} ${minutesString}`

   
}

export function formatTimezoneOffset(timezone:string){
    return new Intl.DateTimeFormat(undefined,{
        timeZone:timezone,
        timeZoneName:"shortOffset",
    })
    .formatToParts(new Date())
    .find(part => part.type == "timeZoneName")?.value
}
