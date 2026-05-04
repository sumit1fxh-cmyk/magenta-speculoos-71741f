import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div style={{ minHeight: '100vh', background: '#070707', padding: '2rem 5%' }}>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginBottom: '2rem',
          color: '#D4AF37',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.9rem',
          letterSpacing: '0.5px',
        }}
      >
        ← BACK TO COLLECTION
      </Link>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
        <div style={{ flex: '1', minWidth: '280px' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', borderRadius: '28px', display: 'block' }}
          />
        </div>

        <div
          style={{
            flex: '1',
            minWidth: '280px',
            background: '#111',
            borderRadius: '28px',
            padding: '2.5rem',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(212,175,55,0.15)',
              color: '#D4AF37',
              padding: '0.3rem 1rem',
              borderRadius: '30px',
              fontSize: '0.75rem',
              fontWeight: 600,
              marginBottom: '1rem',
              letterSpacing: '1px',
            }}
          >
            HAUTE COUTURE — ULTRA LIMITED
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem' }}>
            {product.name}
          </h1>

          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#D4AF37', marginBottom: '1.5rem' }}>
            ${product.price.toLocaleString()}
          </div>

          <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
            {product.description}
          </p>

          <button
            className="buy-btn"
            onClick={() => alert('📩 Inquiries open by appointment — DM @s_sumit_0s on Instagram')}
            style={{ fontSize: '1rem', padding: '14px' }}
          >
            INQUIRE ABOUT THIS PIECE →
          </button>

          <p
            style={{
              marginTop: '1rem',
              fontSize: '0.75rem',
              color: '#555',
              textAlign: 'center',
            }}
          >
            All pieces come with certificate of authenticity &amp; archive box.
          </p>
        </div>
      </div>
    </div>
  )
}
