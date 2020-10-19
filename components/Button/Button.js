const Button = (props) => {

  const colors = {
    primary: 'text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
    secondary: 'text-primary-500 bg-white border border-primary-500 hover:text-primary-600 hover:border-primary-600 active:text-primary-700 active:border-primary-700',
    link: 'text-gray-900 font-semibold hover:text-primary-500 pr-0 pl-0',
    gamifyPrimary: 'text-white border-b-4 border-primary-600 bg-primary-500 hover:bg-primary-600 hover:border-primary-800 active:border-b-0 active:border-t-4',
    gamifySecondary: 'text-primary-500 border border-b-4 border-primary-600 bg-white hover:text-primary-600 hover:border-primary-800 active:border active:border-t-4'
  }

  const sizes = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2 px-4 text-sm',
    lg: 'py-3 px-6 text-lg',
    xl: 'py-4 px-8 text-xl'
  }

  const defaultColor = colors['primary']
  const defaultSize = sizes['md']

  const { className, disabled, color, size, children, type, ...rest } = props

  return (
    <button
      {...rest}
      type={type || 'button'}
      className={`
        inline-flex justify-center font-medium rounded-md transition duration-150 ease-in-out
        ${sizes[size] || defaultSize}
        ${colors[color] || defaultColor}
        ${disabled ? 'button-disabled opacity-50 cursor-default' : ''}
        ${className || ''}
      `}
    >
      <span>
        {props.children}
      </span>

      <i aria-hidden className="fas fa-spinner fa-spin fa-lg hidden m-auto leading-5"></i>
    </button>
  )
}

export default Button