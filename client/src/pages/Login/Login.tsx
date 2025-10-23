import React from 'react'
import { SignIn, useUser } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'

const Login: React.FC = () => {
  const { isSignedIn } = useUser()

  if (isSignedIn) {
    return <Navigate to="/" replace />
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-50 to-indigo-100 py-12 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-lg">
              Continue learning Baybayin with Tala
            </p>
            <div className="mt-4 p-3 bg-blue-50 rounded-2xl border border-blue-200">
              <p className="text-blue-700 text-sm font-medium">
                📧 Use your Gmail account to sign in.
              </p>
            </div>
          </div>

           <SignIn 
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none border-none bg-transparent',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlockButton: 'rounded-xl border-2 border-red-200 bg-white hover:bg-red-50 transition-colors flex items-center justify-center gap-3 py-4 text-gray-700 font-medium',
                  socialButtonsBlockButtonText: 'font-semibold',
                  formButtonPrimary: 'rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3',
                  formFieldInput: 'rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-0 py-3',
                  footerActionLink: 'text-blue-600 hover:text-blue-700 font-semibold',
                  identityPreviewText: 'text-gray-600',
                  formFieldLabel: 'text-gray-700 font-medium'
                }
              }}
              redirectUrl="/"
              signUpUrl="/register"
            />
        </div>
      </div>
    </Layout>
  )
}

export default Login
