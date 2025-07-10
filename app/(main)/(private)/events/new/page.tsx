import EventForm from "@/components/forms/EventForm"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function page() {

  return (
    <Card className="max-w-md mx-auto border-8 border-blue-200 shadow-2xl shadow-accent-foreground" >

  <CardHeader>
    <CardTitle>New Event</CardTitle>
  </CardHeader>

  <CardContent>
    <EventForm/>
 </CardContent>
 
</Card>
  )
}
