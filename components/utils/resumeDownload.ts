import { toast } from 'react-toastify'

export const handleDownloadResume = () => {
  const link = document.createElement('a')
  link.href = '/emekusCv.pdf'
  link.download = 'Oduwaye_Emeka_Resume.pdf'
  link.click()
  toast.success('resume downloading')
}
