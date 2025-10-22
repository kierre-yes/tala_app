import React from 'react'
import Layout from '@/components/layout/Layout'

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <p className="text-center text-gray-600">
              Login form will be implemented in Phase 1
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
