export default function Header({ cartCount })
{
    return(
        <div>
            <h1>React Demo App</h1>
            <p>Cart item: {cartCount}</p>
        </div>
    )
}