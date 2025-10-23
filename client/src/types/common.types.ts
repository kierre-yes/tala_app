declare module "*.pdf" {
  const content: string;
  export default content;
}

export interface BaseResponse {
  success: boolean
  message: string
}

export interface ApiError {
  message: string
  status: number
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger' | 'warning' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}
