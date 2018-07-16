package bitcamp.pms.filter;


    import java.io.IOException;

    import javax.servlet.Filter;
    import javax.servlet.FilterChain;
    import javax.servlet.ServletException;
    import javax.servlet.ServletRequest;
    import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

    @WebFilter("/*")
    public class CharacterEncodingFilter implements Filter{

        @Override
        public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
                throws IOException, ServletException {

            //서블릿 실행 전 수행 할 작업.
            request.setCharacterEncoding("UTF-8");
            //다음필터 또는 서블릿 실행
            chain.doFilter(request, response);
        }

    }
