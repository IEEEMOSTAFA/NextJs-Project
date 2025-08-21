import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>Go Back</button>
      <Link className='text-blue-500 hover:underline' href="/">Return Home</Link>
    </div>
  )
}