import { NextResponse } from 'next/server'

const apiResponse = {
  success (status, message, data = []) {
    return new NextResponse(
      JSON.stringify({
        status_code: status,
        success: true,
        message,
        data
      }), {
        status,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  },

  error (status, message, error = []) {
    return new NextResponse(
      JSON.stringify({
        status_code: status,
        success: false,
        message,
        error
      }),
      {
        status,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
export default apiResponse
