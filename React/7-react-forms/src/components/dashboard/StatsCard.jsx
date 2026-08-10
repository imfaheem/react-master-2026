import Card from "../../components/ui/Card";
import { card_details } from "../../utils";

export const StatsCard = () => {
    return (
        <div className="grid grid-cols-4 gap-2">
            {card_details.map(card => (
                <Card key={card.id} title={card.title} revenue={card.amount} className="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1" />
            ))}
        </div>
    )
}
