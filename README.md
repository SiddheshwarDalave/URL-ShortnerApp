Project Name: URL-Shortner
Developed NodeJs application which helps to shorten the URL and we can redirect it to the original URL using that short id.

Postman Data:
Post request: 
url to hit Post request:http://localhost:8001/url
pass json body: 
{
    "url":"https://www.google.com/"
}
Output: 
{
    "id": "ZC47oku1u"
}

Get request:
http://localhost:8001/url/ZC47oku1u

Output: http://localhost:8001/url/ZC47oku1u redirecting to "https://www.google.com/"
