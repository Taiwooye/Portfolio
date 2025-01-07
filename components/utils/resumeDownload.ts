import { toast } from 'react-toastify'

export const handleDownloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Taiwolatestcv .pdf'
  link.download = 'Oyedokun_Taiwo_Resume.pdf'
  link.click()
  toast.success('resume downloading')
}
