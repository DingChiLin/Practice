# async_scrape.py (requires Python 3.7+)
import asyncio, random, time

async def fetch_url(url):
    print(f"~ executing fetch_url({url})")
    t = time.perf_counter()
    await asyncio.sleep(random.randint(1, 5))
    print(f"time of fetch_url({url}): {time.perf_counter() - t:.2f}s")
    return f"<em>fake</em> page html for {url}"

async def analyze_sentiment(html):
    print(f"~ executing analyze_sentiment('{html}')")
    t = time.perf_counter()
    await asyncio.sleep(random.randint(1, 5))
    r = {"positive": random.uniform(0, 1)}
    print(f"time of analyze_sentiment('{html}'): {time.perf_counter() - t:.2f}s")
    return r

urls = [
    "https://www.ietf.org/rfc/rfc2616.txt",
    "https://en.wikipedia.org/wiki/Asynchronous_I/O",
]
extracted_data = {}

async def handle_url(url):
    html = await fetch_url(url)
    extracted_data[url] = await analyze_sentiment(html)

async def main():
    t = time.perf_counter()
    await asyncio.gather(*(handle_url(url) for url in urls))
    print("> extracted data:", extracted_data)
    print(f"time elapsed: {time.perf_counter() - t:.2f}s")
    
asyncio.run(main())

