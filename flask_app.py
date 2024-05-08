from flask import Flask, request, render_template, Response, redirect
from email_blocks import core_blocks, primary_blocks, secondary_blocks, tertiary_blocks
from inapp_blocks import core_code, inapp_slides


app = Flask(__name__)

@app.route("/") 
def redirect_internal():
    return redirect("/emails", code=302)
        
@app.route("/emails", methods=['GET', 'POST'])
def emails():
    return render_template(
    'emails.html', 
    p1_small = primary_blocks.p1_small,
    p1_wide = primary_blocks.p1_wide,
    s1 = secondary_blocks.s1,
    s2 = secondary_blocks.s2,
    s3 = secondary_blocks.s3,
    s4 = secondary_blocks.s4,
    s5 = secondary_blocks.s5,
    s6 = secondary_blocks.s6,
    s7 = secondary_blocks.s7, 
    t2 = tertiary_blocks.t2,
    t3 = tertiary_blocks.t3,
    t_csrequest = tertiary_blocks.t_csrequest,
    t_sccertified = tertiary_blocks.t_sccertified,
    t_inbounddemo = tertiary_blocks.t_inbounddemo,
    t_livewebinars = tertiary_blocks.t_livewebinars,
    t_integrations = tertiary_blocks.t_integrations,
    t_freeseats = tertiary_blocks.t_freeseats,
    t_sensors = tertiary_blocks.t_sensors,
    t__community = tertiary_blocks.t_community,
    triline = core_blocks.triline
    )
    
@app.route("/email-download", methods=['GET', 'POST'])
def email_download():
    comp_list = request.form.getlist('component')
    
    main_output = ''.join(comp_list)
    complete_output = core_blocks.email_top + main_output + core_blocks.email_bottom
    
    return Response(
        complete_output,
        mimetype="text",
        headers={"Content-disposition":
            "attachment; filename=email_template_output.html"} 
    )

      
@app.route("/inapps", methods=['GET','POST'])
def inapps(): 
    return render_template(
        'inapps.html',
        w1 = inapp_slides.w1,
        w1_tooltips = inapp_slides.w1_tooltips,
        w2 = inapp_slides.w2,
        w41 = inapp_slides.w41,
        w42 = inapp_slides.w42,
        w5 = inapp_slides.w5,
        w61 = inapp_slides.w61,
        w62 = inapp_slides.w62,
        w63 = inapp_slides.w63,
        w64 = inapp_slides.w64,
        w65 = inapp_slides.w65,
        w67 = inapp_slides.w67,
        w7 = inapp_slides.w7,
        w81 = inapp_slides.w81,
        w82 = inapp_slides.w82,
        w83 = inapp_slides.w83,
        w91 = inapp_slides.w91,
        w92 = inapp_slides.w92,
        w101 = inapp_slides.w101,
        w111 = inapp_slides.w111,
        w112 = inapp_slides.w112,
        tt = core_code.tooltip_package,
        us = core_code.userscoring_package,
        swipe = core_code.swiper_package    
    )
  
@app.route("/inapp-download", methods=['GET', 'POST'])
def inapp_download():
    top_list = request.form.getlist('top')
    slide_list = request.form.getlist('slide')
    
    top_output = ''.join(top_list)
    slide_output = ''.join(slide_list)
    
    complete_output = core_code.inapp_top + top_output + core_code.inapp_top2 + slide_output + inapp_slides.close_slide + core_code.inapp_bottom
    
    return Response(
        complete_output,
        mimetype="text",
        headers={"Content-disposition":
            "attachment; filename=inapp_template_output.html"} 
    )
       
        
# if __name__ == '__main__':
#     app.run(debug = True)

