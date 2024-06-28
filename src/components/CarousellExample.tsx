import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

interface CarousellProps {};

export function CarousellExample(props: CarousellProps)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

interface ItemValues {
    name: string;
    description: string;
};

interface ItemProps {
    key: number;
    item: ItemValues;
};

function Item(props: ItemProps)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
