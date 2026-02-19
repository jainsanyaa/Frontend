export default function Footer({ year,company})
{
    
    return(
        <>
        <footer>
        <p>{year[1]}{company.location}</p>
        </footer>
        </>
    )
}