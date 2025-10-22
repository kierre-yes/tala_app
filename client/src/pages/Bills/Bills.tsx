import React from 'react'
import Layout from '@/components/layout/Layout'
import { Download, FileText, Calendar, User, ExternalLink } from 'lucide-react'
import Button from '@/components/common/Button'

interface BillDocument {
  id: string
  title: string
  description: string
  date: string
  author: string
  status: string
  pdfUrl: string
  congress: string
}

const Bills: React.FC = () => {
  const billDocuments: BillDocument[] = [
    {
      id: 'hb-1022-17th',
      title: 'House Bill 1022 - National Writing System Act',
      description: 'An Act Declaring "Baybayin" as the National Writing System of the Philippines, Providing for Its Promotion, Protection, Preservation and Conservation',
      date: '2016-07-04',
      author: 'Rep. Leopoldo N. Bataoil',
      status: 'Committee Approved (2018)',
      pdfUrl: 'https://ldr.senate.gov.ph/bills/house-bill-no-1022-17th-congress-republic',
      congress: '17th Congress'
    },
    {
      id: 'sb-2440-16th',
      title: 'Senate Bill 2440 - National Writing System Act',
      description: 'An Act Declaring "Baybayin" as the National Writing System of the Philippines, Providing for Its Promotion, Protection, Preservation and Conservation',
      date: '2014-10-28',
      author: 'Sen. Loren B. Legarda',
      status: 'Filed',
      pdfUrl: 'https://legacy.senate.gov.ph/lisdata/2002317137!.pdf',
      congress: '16th Congress'
    },
    {
      id: 'sb-1866-19th',
      title: 'Senate Bill 1866 - Baybayin Cultural Development Act',
      description: 'An Act Promoting the Use of Baybayin as a Tool for Cultural Development of the Philippines',
      date: '2023-02-13',
      author: 'Sen. Loren B. Legarda',
      status: 'Filed',
      pdfUrl: 'https://legacy.senate.gov.ph/lisdata/4073037114!.pdf',
      congress: '19th Congress'
    },
    {
      id: 'hb-10657-18th',
      title: 'House Bill 10657 - Philippine Indigenous Writing Systems Act',
      description: 'An Act to Protect and Preserve Philippine Indigenous and Traditional Writing Systems Including Baybayin',
      date: '2022-01-31',
      author: 'Speaker Lord Allan Velasco & Rep. John Marvin Nieto',
      status: 'Passed House (2022)',
      pdfUrl: 'https://www.congress.gov.ph/legisdocs/',
      congress: '18th Congress'
    }
  ]

  const handleViewPDF = (pdfUrl: string, title: string) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer')
  }

  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title.replace(/\s+/g, '-')}.pdf`
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Philippine Baybayin Laws
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official legislation from the Philippine Congress supporting Baybayin 
            as our national writing system and cultural treasure.
          </p>
        </div>

        <div className="grid gap-6">
          {billDocuments.map((bill) => (
            <div key={bill.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {bill.congress}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      bill.status.includes('Passed') 
                        ? 'bg-green-100 text-green-800'
                        : bill.status.includes('Approved')
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {bill.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {bill.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(bill.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{bill.author}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleViewPDF(bill.pdfUrl, bill.title)}
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Document
                  </Button>
                  
                  <Button
                    variant="primary"
                    onClick={() => handleDownload(bill.pdfUrl, bill.id)}
                    className="flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About These Legislations
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              These are actual legislative documents from the Philippine Congress that establish legal frameworks for preserving and promoting Baybayin as the national writing system, a significant part of the country's cultural heritage and identity.
            </p>
            <p>
              House Bill 1022 was approved by the House Committee on Basic Education and Culture in 2018, a significant step that mandates Baybayin translations on food labels, street signs, and government buildings, thereby bringing Baybayin into everyday life [491][496].
            </p>
            <p>
              Senate Bills by Senator Loren Legarda consistently advocate for the preservation of Baybayin across multiple congressional sessions, demonstrating the importance of political support in preserving and promoting Baybayin as a National Cultural Treasure [492][497].
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Bills
